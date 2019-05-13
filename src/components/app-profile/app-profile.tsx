import { Component } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  private navCtrl: HTMLIonRouterElement;

  componentDidLoad() {
    this.navCtrl = document.querySelector("ion-router");
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <ion-button href="/profile/detail" routerDirection="forward">
          Push Detail Page (href)
        </ion-button>
        <ion-button onClick={() => this.navCtrl.push("/profile/detail")}>
          Push Detail Page
        </ion-button>
      </ion-content>
    ];
  }
}
