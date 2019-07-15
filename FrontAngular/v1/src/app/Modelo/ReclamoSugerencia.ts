export class ReclamoSugerencia{
    idReclamoSugerencia:number;
    idEmpresa:number;
    fechaReclamoSugerencia:Date;
    detalleReclamoSugerencia:string;
    usuarioReclamoSugerencia:number;
    idEmpleado:number;
    estado:string;
    tipo:string;
    respuesta:string;
    
    constructor(){
        this.idReclamoSugerencia=0;
        this.idEmpresa=0;
        this.fechaReclamoSugerencia=new Date();
        this.detalleReclamoSugerencia="";
        this.usuarioReclamoSugerencia=0;
        this.idEmpleado=0;
        this.estado="";
        this.tipo="";
        this.respuesta="";
    }
  
    
}