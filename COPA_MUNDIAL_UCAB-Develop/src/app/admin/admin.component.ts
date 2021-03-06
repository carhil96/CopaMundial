import { Component } from '@angular/core';

enum MODULES {
	CIUDADES = "CIUDADES",
	ESTADIOS = "ESTADIOS",
	EQUIPOS = "EQUIPOS",
	JUGADORES = "JUGADORES",
	PARTIDOS = "PARTIDOS",
	LOGROS = "LOGROS",
	APUESTAS = "APUESTAS",
	ESTADISTICAS = "ESTADISTICAS"
}

class Module {
	name: MODULES;
	routeName: string;
	isActive: boolean;

	constructor(name,routeName,isActive){
		this.name = name;
		this.routeName = routeName;
		this.isActive = isActive;
	}
}

type Menu = "menu" | "menu-2";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
	private moduleArray: Array<Module>;
	private moduleMap: Map<MODULES, Module> = new Map<MODULES, Module>();
	private loadPanel: boolean; 

	constructor(){
		this.moduleArray = [
			new Module(MODULES.CIUDADES, "city", false),
			new Module(MODULES.ESTADIOS, "stadium", false),
			new Module(MODULES.EQUIPOS, "team", false),
			new Module(MODULES.JUGADORES, "player", false),
			new Module(MODULES.PARTIDOS, "match", false),
			new Module(MODULES.LOGROS, "achievement", false),
			new Module(MODULES.APUESTAS, "bet", false),
			new Module(MODULES.ESTADISTICAS, "statistic", false)
		];

		this.initialiseModules();
	}

	initialiseModules(): void {
		for (var i = 0; i < this.moduleArray.length; i++) {
			this.moduleMap.set(this.moduleArray[i].name, this.moduleArray[i]);
		}
	}

	setModuleActive(module: MODULES) {
		this.moduleMap.forEach(function(module){
			module.isActive = false; 
		})

		this.moduleMap.get(module).isActive = true;
	}
}