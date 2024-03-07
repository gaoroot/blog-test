import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
    private dataSource: DataSource
  ) {}
  create(createBlogDto: CreateBlogDto) {
    const blog = this.blogRepository.create(createBlogDto);

    return this.blogRepository.save(blog);
  }

  async findAll() {
    const [blogs, count] = await this.blogRepository.findAndCount(
      {
        // take: 10,
        // skip: 0,
        cache: true,
        order: {
          createdAt: 'DESC'
        },
        // transaction: true,
        // where: {
        //   status: 'published'
        // }
      }
    );

    return {data: blogs, total: count};
  }

  findOne(id: number) {
    const blog = this.blogRepository.findOneBy({ id });

    return blog;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = this.blogRepository.update(id, updateBlogDto);

    return blog;
  }

  remove(id: number) {
    const blog = this.blogRepository.delete(id);

    return blog;
  }
}
