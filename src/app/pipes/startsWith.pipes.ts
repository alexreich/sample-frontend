import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'startsWith' })
export class StartsWithPipe implements PipeTransform {
    transform(value: any[], term: string): any[] {
        if (term != null) {
            const results = value.filter((x: any) => {
                if (x.PostalAddress.TownName) {
                    return x.PostalAddress.TownName.toLowerCase().startsWith(term.toLowerCase());
                } else {
                    return x.Name.toLowerCase().startsWith(term.toLowerCase());
                }
            });
            return results;
        } else {
            return value;
        }
    }
}
