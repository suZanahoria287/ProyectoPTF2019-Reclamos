import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';


@Component({
  selector: 'app-realizar-sugerencia',
  templateUrl: './realizar-sugerencia.component.html',
  styleUrls: ['./realizar-sugerencia.component.css']
})
export class RealizarSugerenciaComponent implements OnInit {

rs:ReclamoSugerencia=new ReclamoSugerencia();
idBusqueda:number;
empresas:string[]=[];
empresa:string;

constructor(private router:Router, private serviceRS:RsServiceService,private servicioEmpresa:EmpresaServiceService) { }

ngOnInit() {
  this.rs.idReclamoSugerencia=0;
  let credencial=localStorage.getItem("Email");
  if(credencial=="anonimo"|| credencial==null){
    this.router.navigate(["home"]);
  }
  this.rs.usuarioReclamoSugerencia=+localStorage.getItem("idUsuario");
  console.log("oid usuariasdlknads "+this.rs.usuarioReclamoSugerencia)
  this.servicioEmpresa.listaEmpresas().subscribe(data=>{
    this.empresas=data;
  
  });
}


realizarReclamoSugerencia() {
  try {
    this.servicioEmpresa.idEmpresa(this.empresa).subscribe(data=>{
      let emp:Empresa=data;
      
      this.rs.idEmpresa=emp.rutEmpresa;
      console.log(this.rs.idEmpresa);
      this.rs.tipo="Sugerencia";
      
      this.rs.idReclamoSugerencia=0;
      this.rs.idEmpleado=0;
      this.rs.estado="en proceso";
    
      this.rs.respuestaRS="aun no tiene respuesta";
      
      this.rs.fechaReclamoSugerencia=new Date();
      
      localStorage.setItem("tituloRS",this.rs.tituloRS);
      localStorage.setItem("empresa",this.rs.idEmpresa+"");
      localStorage.setItem("idRS",""+this.rs.idReclamoSugerencia);
      localStorage.setItem("fecha",this.rs.fechaReclamoSugerencia.toString());
      localStorage.setItem("detalleRS",this.rs.detalleReclamoSugerencia);
      localStorage.setItem("tipo",this.rs.tipo);
      this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});

      this.serviceRS.getLastReclamo(this.rs.usuarioReclamoSugerencia).subscribe(data=>{
        let rs:ReclamoSugerencia=data;
        
        localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
        console.log(localStorage.getItem("idRS"));
        //alert("reclamo generado enviado con exito ");
        this.router.navigate(["rs_enviado"]);
      });
    })
    
  } catch (error) {
  console.log("error");
  }
  
}

buscarPorId(){
  localStorage.setItem("idBusqueda",""+this.idBusqueda);
  this.router.navigate(['buscar_id']);
  
}
cerrarSesion(){
  localStorage.setItem("Email", "anonimo");
  this.router.navigate(["home"])
}
realizarSugerencia(){
  this.router.navigate(["realizar_sugerencia"]);
}
realizarReclamo(){
  this.router.navigate(["realizar_reclamo"]);
}
}
