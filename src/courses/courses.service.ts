import { HttpException, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Descriçaõ do curso',
      tags: ['curso', 'typescript', 'nodejs'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));
    if (!course) {
      throw new HttpException('Course not found', 404);
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const findIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[findIndex] = updateCourseDto;
  }

  delete(id: string) {
    const findIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (findIndex >= 0) {
      this.courses.splice(findIndex, 1);
    }
  }
}
