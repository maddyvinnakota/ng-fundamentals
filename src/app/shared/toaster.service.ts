import {Injectable} from "@angular/core";

declare let toastr: any;

@Injectable()
export class ToasterService {
  success(message: string, title?: string) {
    toastr.success(message, title);
  }

}
