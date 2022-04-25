import { defineStore } from "pinia";

type routeTableObject = {
  name: string,
  path: string,
  component: string,
  customBlock: any,
  props: boolean,
  meta: object
}

export const useRouteStore = defineStore('route', {
  state: () => {
    return {
      routeTable: {
        name: '',
        path: '',
        component: '',
        customBlock: undefined,
        props: true,
        meta: {}
      }
    }
  },
  actions: {
    setRouteTable(routeTable: routeTableObject) {
      this.routeTable = routeTable;
    }
  },
  getters: {
    getRouteTable(): routeTableObject {
      return this.routeTable;
    }
  }
});