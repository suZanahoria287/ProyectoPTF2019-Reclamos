package com.example.proyectoV1.services;
import java.util.List;

import com.example.proyectoV1.entities.Empresa;
public interface EmpresaService {
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar
	Empresa add(Empresa e);
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	void delete(int rutEmpresa);
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de todas las Empresas
	List<Empresa> listarEmpresa();
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//Buscar una Empresa por su ID
	Empresa idEmpresa(int idEmpresa);
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//Buscar una Empresa por su Nombre
	Empresa nombreEmpresa(String nombreEmpresa);
}
