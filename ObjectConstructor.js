console.log("Siddesh is Starting JavaScript");

function emp(id,name,sallery){
    this.id = id;
    this.name = name;
    this.sallery = sallery;
   }
   e = new emp(101,"Jagadesh",150000);
   document.write(e.id+" "+ e.name+" "+e.sallery);

