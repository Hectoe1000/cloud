import { Component } from '@angular/core';
import { UploadService } from 'src/app/solicitudes/upload.service';

@Component({
  selector: 'app-carga-img',
  templateUrl: './carga-img.component.html',
  styleUrls: ['./carga-img.component.css']
})
export class CargaImgComponent {

  constructor( private uploadServices:UploadService){

  }

  
  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  subir(){
    if(this.files.length===0) return false
    const file_data=this.files[0];
    const data =new FormData();
    data.append('file' ,file_data);
    data.append('upload_preset','image_upload');
    data.append('cloud_name','dif6hsyhq')
  


    
    this.uploadServices.uploading(data).subscribe(
      {
        next: (response: any) => {
          console.log(response); // Aquí ves toda la respuesta de Cloudinary
    
          const imageUrl = response.secure_url; // Extraer el enlace de la imagen subida
          console.log('URL de la imagen subida:', imageUrl);

          // Realizar algo con el enlace (por ejemplo, guardarlo en tu base de datos)
          alert('Imagen subida correctamente');
    
        },
        error: (e: any) => {
          console.log(e);
          alert('Error al subir la imagen');
        },

    })

   
    return true;
  }
  //Colocar en la base de datos
  









}
