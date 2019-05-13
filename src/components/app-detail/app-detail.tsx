import { Component } from "@stencil/core";

@Component({
  tag: "app-detail",
  styleUrl: "app-detail.css"
})
export class AppDetail {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/profile" />
          </ion-buttons>
          <ion-title>Detail</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding />
    ];
  }
}
