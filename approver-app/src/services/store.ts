//
// store.ts
//

import { reactive } from 'vue'

export const store = reactive({
  requestedUpdates:        [],
  selectedRequestedUpdate: null,
  approvedRequests:        [],
  selectedApprovedRequest: null,

  loadRequestedUpdates() {
    this.requestedUpdates = [
      { id: "0", requester: "Stuart", summary: "Remove User",    dateReceived: "31/07/2024" },
      { id: "1", requester: "Marije", summary: "Add Project" ,   dateReceived: "30/07/2024" },
      { id: "2", requester: "Erik",   summary: "Add Profile",    dateReceived: "30/07/2024" },
      { id: "3", requester: "Tim",    summary: "Update Profile", dateReceived: "29/07/2024" }
    ];
    this.selectedRequestedUpdate = null;
  },

  loadApprovedRequests() {
    this.approvedRequests = [
      { id: "0", requester: "Stuart",  summary: "Add User",       dateReceived: "10/07/2024", dateApproved: "10/07/2024", outcome: "done" },
      { id: "1", requester: "Marije",  summary: "Remove User",    dateReceived: "11/07/2024", dateApproved: "13/07/2024", outcome: "done" },
      { id: "2", requester: "Dick",    summary: "Add Project",    dateReceived: "12/07/2024", dateApproved: "14/07/2024", outcome: "failed" },
      { id: "3", requester: "Mariska", summary: "Update Profile", dateReceived: "11/07/2024", dateApproved: "11/07/2024", outcome: "ongoing" },
      { id: "4", requester: "Olly",    summary: "Remove Project", dateReceived: "13/07/2024", dateApproved: "15/07/2024", outcome: "done" },
      { id: "5", requester: "Erik",    summary: "Add Profile",    dateReceived: "12/07/2024", dateApproved: "13/07/2024", outcome: "failed" },
      { id: "6", requester: "Tim",     summary: "Remove Profile", dateReceived: "11/07/2024", dateApproved: "12/07/2024", outcome: "done" }
    ];
    this.selectedApprovedRequest = null;
  },

  async submitApproveUpdateRequest() {
    console.log("Doing - Submit Update Request Approval");
  }
})
