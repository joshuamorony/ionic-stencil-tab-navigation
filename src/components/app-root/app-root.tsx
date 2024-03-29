import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route component="app-tabs">
            <ion-route url="/" component="tab-home">
              <ion-route component="app-home" />
            </ion-route>

            <ion-route url="/profile" component="tab-profile">
              <ion-route component="app-profile" />
              <ion-route url="/detail" component="app-detail" />
            </ion-route>
          </ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
