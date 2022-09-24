import { makeAutoObservable } from "mobx";

class BugsStore {
  constructor() {
    this._bugs = ['bug 1'];

    makeAutoObservable(this);
  }

  getBugsList() {
    return this._bugs
  }

  setBugsList(bug) {
    this._bugs.push(bug)
  }

  get bugsCount() {
    return this._bugs.length
  }
}

const bugsInstance = new BugsStore()
export default bugsInstance;
