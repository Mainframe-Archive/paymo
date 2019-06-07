[![CircleCI](https://circleci.com/gh/MainframeHQ/payments.svg?style=svg)](https://circleci.com/gh/MainframeHQ/payments)
# paymo
Paymo is a simple dApp for sending payments in MainframeOS

## Build/run instructions

#### Install dependencies & build
```
yarn
yarn build
```

#### Open in Mainframe OS
- [Install Mainframe OS](docs.mainframe.com) (from binaries or by building from source)
- In Mainframe OS, go to **More > App Development Tool**, create your Developer Identity, and click **Add** to add this app to Mainframe OS. Add the `/build` directory as the content path.
- Click **Open** button to run the pre-built version of the app in a Mainframe OS window.

#### Run/debug development version
To run a development version of the app from localhost, in this app directory run
```
yarn start
```
Then in the app window running in Mainframe OS, click the content path field at the top of the address bar and change it to be http://localhost:3000.

>**Note:** Apps that import the Mainframe SDK cannot be run in an external browser. If you try to open your new dapp in a standard browser (e.g. Chrome), you will get the following error: Error: Cannot find expected mainframe client instance. Dapps that integrate with the Mainframe SDK can only be opened in Mainframe OS.

#### Link to development version of Mainframe SDK

- [Build Mainframe OS from source](https://docs.mainframe.com/docs/platform)
- Inside the `mainframe-os` project, at the `/packages/sdk` directory, run `yarn link`.
- Run the mainframe launcher program with `yarn run dev` and follow the setup instructions.
- Inside the root of this project, run `yarn link @mainframe/sdk`.
- Build the app with `yarn build`.
- Run app in Mainframe OS
