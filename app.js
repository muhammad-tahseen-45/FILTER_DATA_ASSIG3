var arr = [
    {
        brand: "samsung",
        model: "samsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "samsung",
        model: "samsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "samsung",
        model: "samsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "vivo",
        model: "vivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "vivo",
        model: "vivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "vivo",
        model: "vivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "motorola",
        model: "motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "iphone",
        model: "iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "iphone",
        model: "iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "iphone",
        model: "iphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]



// ******* drop down item   
const dtt = ()=>{
   
    const maindata = document.getElementById("maindata")
const dtarender = arr.map((p,index)=>{
    
  return  `<li>
  
 
  <ul> brand  :${p.brand} </ul>
  <ul> model : ${p.model} </ul>
  <ul> price: ${p.price} </ul>
  <ul> camera: ${p.camera} </ul>
  <ul> ram: ${p.ram} </ul>
  <ul>rom: ${p.rom} </ul>
  
  </li>`
  

})
console.log(dtarender)
maindata.innerHTML = dtarender
}
        

// ********input filter

const inputuser = document.getElementById("inputuser")
const user = ()=>{
    const filter = arr.filter((value)=>{
        return value.brand === inputuser.value || value.model === inputuser.value ||
        value.price === inputuser.value || value.camera === inputuser.value ||
        value.ram === inputuser.value || value.rom === inputuser.value

    })
    inputuser.value = ""
    
   let userdata = document.getElementById("userdata")
    const useradtarendor = filter.map ((v)=>{
        return `
        <h3>mobail phone</h3>
      <p> brand : ${v.brand} </p>
      <p> model : ${v.model} </p>
      <p> price : ${v.price} </p>
      <p> camera : ${v.camera} </p>
      <p> ram : ${v.ram} </p>
      <p> rom : ${v.rom} </p>
      `
    })
   userdata.innerHTML = useradtarendor
}


   



 
