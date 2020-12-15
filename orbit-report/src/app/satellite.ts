import { NgIf } from '@angular/common';

export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  
  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
  }

  shouldShowWarning() {
    let lowerCaseClass = this.type.toLowerCase();
    if (lowerCaseClass === 'space debris') {
    return true;
    } else return false;
  }
}
