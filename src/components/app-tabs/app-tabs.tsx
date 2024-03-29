import { Component } from "@stencil/core";

@Component({
  tag: "app-tabs",
  styleUrl: "app-tabs.css"
})
export class AppTabs {
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav />
        </ion-tab>

        <ion-tab tab="tab-profile">
          <ion-nav />
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="map" />
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-profile">
            <ion-icon name="information-circle" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
