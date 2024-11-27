function emp(id,name,title){
this.id=id;
this.name=name;
this.title=title;

this.fullname=fullname;
function fullname(myname){
this.title=myname;
}



}

e = new emp(1,"Jayanta","halder");
document.write(e.id+" "+e.name+" "+e.title);

e.fullname("JAYANTA_HALDER");
document.write("<br>"+e.id+" "+e.name+" "+e.title);
