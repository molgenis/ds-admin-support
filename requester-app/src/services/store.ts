//
// store.ts
//

import { reactive } from 'vue'

export const store = reactive({
  requestRecipients:         [],
  selectedRequestRecipients: [],
  requestTemplates:          [],
  selectedRequestTemplate:   null,
  loadRequestRecipients() {
     this.requestRecipients = [
       { name: "Bib",     location: "https://bib.nhs.gov.uk", personalaccesstoken: "97380732493645503d4ea56da491421c" },
       { name: "FIREA",   location: "https://firea.gov.no" ,  personalaccesstoken: "8c6451c16317271e1a473dd609af6e0d" },
       { name: "HUNT",    location: "https://hunt.gov.fi",    personalaccesstoken: "664545506453d4ea56645503d4e31727" },
       { name: "DPhacto", location: "https://dphacto.gov.dk", personalaccesstoken: "0f51fe0c40fde2c5b53c2d04aad18745" }
     ];
     this.selectedRequestRecipients = [];
  },
  loadRequestTemplates() {
     this.requestTemplates = [
       { type: "Add User",       parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "User name" } ] },
       { type: "Remove User",    parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "User name" } ] },
       { type: "Add Project",    parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "Project name" } ] },
       { type: "Remove Project", parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "Project name" } ] },
       { type: "Add Profile",    parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "Project name" }, { paramName: "Profile name" } ] },
       { type: "Update Profile", parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "Project name" }, { paramName: "Profile name" } ] },
       { type: "Remove Profile", parameters: [ { paramName: "Purpose of Update" }, { paramName: "Requester" }, { paramName: "Project name" }, { paramName: "Profile name" } ] }
     ];
     this.selectedRequestTemplate = null;
  }
})
