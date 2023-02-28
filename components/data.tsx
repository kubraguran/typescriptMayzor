import React from "react";

interface Person {
    id:number,
    name: string;
    phone: string;
    email: string;
    situation: string;
    img:string,
  }
  
   const people:Person[] = [
    {
     id:1,
     name:"Lale Soylu",
     email:"lalesoylu@gail.com",
     phone: '0555 555 55 55',
     situation:"Aktif",
     img:"https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
     
    },
    {
      id:2,
      name:"Haydar Candan",
      email:"haydar_345@gmail.com",
      phone: '0555 555 55 55',
      situation:"Yasaklandı",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQDokpgIyfjV1BFX08hiFYT7dBkY1FErk7-3tLBmIVWpQltjMD2pPOs1aYWLNY6bT7fY&usqp=CAU",
    },
    {
      id:3,
      name:"Akın Peyda",
      email:"akinpeyda@gmail.com",
      phone: '0555 555 55 55',
       situation:"Aktif",
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVRR689h-rJJsTMJbY7w4zLP30xxYflNRy6HM164ZjtcJHhgL8su7kCJgBLqdJOx_2D4&usqp=CAU",
    },
    {
      id:4,
      name:"Suna Küçük",
      email:"suna_kck34@gail.com",
      phone: '0555 555 55 55',
       situation:"Aktif",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqfCGP5XjqA61fi9Jp3N_wKhrQj8O89zTAPW4GbeMHlX19V3JSL9yNYZm_Dy55rSqsZI&usqp=CAU"
       
    },
    {
      id:5,
      name:"Lale Soylu",
      email:"lalesoylu@gail.com",
      phone: '0555 555 55 55',
      situation:"Aktif",
      img:"https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
     },
     {
      id:6,
       name:"Haydar Candan",
       email:"haydar_345@gmail.com",
       phone: '0555 555 55 55',
        situation:"Yasaklandı",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQDokpgIyfjV1BFX08hiFYT7dBkY1FErk7-3tLBmIVWpQltjMD2pPOs1aYWLNY6bT7fY&usqp=CAU",


     },
     {
      id:7,
       name:"Akın Peyda",
       email:"akinpeyda@gmail.com",
       phone: '0555 555 55 55',
        situation:"Kısıtlandı",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVRR689h-rJJsTMJbY7w4zLP30xxYflNRy6HM164ZjtcJHhgL8su7kCJgBLqdJOx_2D4&usqp=CAU",


     },
     {
      id:8,
       name:"Suna Küçük",
       email:"suna_kck34@gail.com",
       phone: '0555 555 55 55',
        situation:"Aktif",
 img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqfCGP5XjqA61fi9Jp3N_wKhrQj8O89zTAPW4GbeMHlX19V3JSL9yNYZm_Dy55rSqsZI&usqp=CAU"


     },
     {
      id:9,
      name:"Lale Soylu",
      email:"lalesoylu@gail.com",
      phone: '0555 555 55 55',
       situation:"Aktif",
       img:"https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",


     },
     {
      id:10,
       name:"Haydar Candan",
       email:"haydar_345@gmail.com",
       phone: '0555 555 55 55',
        situation:"Kısıtlandı",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQDokpgIyfjV1BFX08hiFYT7dBkY1FErk7-3tLBmIVWpQltjMD2pPOs1aYWLNY6bT7fY&usqp=CAU",

     },
     {
      id:11,
       name:"Akin Peyda",
       email:"akinpeyda@gmail.com",
       phone: '0555 555 55 55',
        situation:"Kısıtlandı",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVRR689h-rJJsTMJbY7w4zLP30xxYflNRy6HM164ZjtcJHhgL8su7kCJgBLqdJOx_2D4&usqp=CAU",

     },
     {
      id:12,
       name:"Suna Küçük",
       email:"suna_kck34@gail.com",
       phone: '0555 555 55 55',
        situation:"Aktif",
 img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqfCGP5XjqA61fi9Jp3N_wKhrQj8O89zTAPW4GbeMHlX19V3JSL9yNYZm_Dy55rSqsZI&usqp=CAU"
      },
  ]
  
  
export { people };
    export type { Person };
  
  
  