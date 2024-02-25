import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition"

export default class extends Controller {

  static targets = ['dropdown', 'openUserMenu']

  connect() {
    console.log("Hello from header_controller!");

    this.openUserMenuTarget.addEventListener("click", (e) => {
      console.log("Header clicked!");
      openDropdown(this.dropdownTarget)
    })
  }
}

function openDropdown(element) {
  toggle(element).then(() => {
    console.log("Enter transition complete")
  })
}

function closeDropdown(element) {
  leave(element).then(() => {
    element.destroy();
  })
}
