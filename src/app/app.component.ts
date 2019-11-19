import { Component } from '@angular/core';
import {Empd} from './empd';
import { EmpsService } from './emps.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp';
  empno:any;
  sal:number;
  depid:any;
  show=true;
  showup=true;
  showem=false;
 // showd=true;
  eobj=new Empd();
  msg:any;

  constructor(private ser:EmpsService)
  {
    this.eobj.empno=0;
    this.eobj.sal=0;
    this.eobj.depid=0;
  }
  getdet()
  {
    this.ser.ssel(this.eobj.empno).subscribe((data:any)=>
    {
       if(data.message=="nok")
       {
         this.show=false;
        // this.showd=false;
         this.showem=true;
       }
       else
       {
         console.log(data);
         this.eobj.depid=data[0].deptid;
         this.eobj.sal=data[0].salary;
         this.showem=true;
         this.showup=false;
        // this.showd=false;
       }
    });
  }
  add()
  {
    let e = this.eobj;
    this.ser.insert(e).subscribe((data:any)=>
    {
        if(data==1)
        {
          this.show=true;
          //this.showd=true;
          this.showem=false;
          this.msg="rows affected"+data;
          this.eobj.empno="";
          this.eobj.sal=null;
          this.eobj.depid="";
          this.showem=true;
         this.showup=false;
        }
    });
  }
  modify()
  {
    alert("update called");
    this.ser.update(this.eobj).subscribe((data:any)=>
    {
      if(data==1)
      {
        this.show=true;
         // this.showd=true;
          this.showem=false;
          this.msg="rows affected"+data;
          this.eobj.empno="";
          this.eobj.sal=null;
          this.eobj.depid="";
          this.showem=false;
         this.showup=true;
      }
    })
  }
  delete()
  {
    this.ser.dele(this.eobj.empno).subscribe((data:any)=>
    {
      if(data==1)
      {
        this.show=true;
          //this.showd=true;
          this.showem=false;
          this.msg="rows affected"+data;
          this.eobj.empno="";
          this.eobj.sal=null;
          this.eobj.depid="";
      }
    })
  }
  search()
  {
    this.ser.getdep(this.eobj.depid).subscribe((data:any)=>
    {
      if(data.message=="nok")
      {
        this.show=false;
       // this.showd=false;
        this.showem=true;
      }
      else
      {
        this.msg="";
       for(var i=0;i<data.length;i++)
       {
         this.msg+=data[i].empid+"  "+data[i].salary+"  "+data[i].deptid+"\n";
       }
       //this.msg=res;
      }
    })
  }
  sortbyid()
  {
    this.ser.id().subscribe((data:any)=>
    {
      if(data.message=="nok")
      {
        this.show=false;
       // this.showd=false;
        this.showem=true;
      }
      else
      {
        this.msg="";
       for(var i=0;i<data.length;i++)
       {
         this.msg+=data[i].empid+"  "+data[i].salary+"  "+data[i].deptid+"\n";
       }
       //this.msg=res;
      }
    })
  }
  sortbysal()
  {
    this.ser.sal().subscribe((data:any)=>
    {
      if(data.message=="nok")
      {
        this.show=false;
       // this.showd=false;
        this.showem=true;
      }
      else
      {
        this.msg="";
       for(var i=0;i<data.length;i++)
       {
         this.msg+=data[i].empid+"  "+data[i].salary+"  "+data[i].deptid+"\n";
       }
      // this.msg=res;
      }
    })
  }
  import()
  {
    alert("import clicked");

  }
  export()
  {
    alert("export clicked");
    
  }
}
