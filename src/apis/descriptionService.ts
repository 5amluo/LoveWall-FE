import request from "./request";
export default class descriptionService {
    static async descriptionget(data: {
      name: string,
      sex: string,
      phonenum: string,
      major: string,
      age: string,
      motto: string,
      date1: string,
      date2: string,
      constellation: string,
      emails: string,
    }): Promise<any> {
      return request({
        headers: { "Content-Type": "application/json" },
        method: "get",
        url: "/api/control/information",
        data: data
      });
    }

    static async descriptionput(data: {
        name: string,
        sex: string,
        phonenum: string,
        major: string,
        age: string,
        motto: string,
        date1: string,
        date2: string,
        constellation: string,
        emails: string,
      }): Promise<any> {
        return request({
          headers: { "Content-Type": "application/json" },
          method: "put",
          url: "/api/control/information",
          data: data
        });
      }
}