import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(projectList: Array<any>, search: string): any {
    if (projectList && search)
      return projectList.filter(
        (d) =>
          d.project_name.indexOf(search) > -1 ||
          d.id == search ||
          d.description.indexOf(search) > -1
      );
    return projectList;
  }
}
