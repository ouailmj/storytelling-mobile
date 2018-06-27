import { StoryTellingApp } from "./app.component";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { RegisterPage } from "../pages/register/register";
import { WelcomePage } from "../pages/welcome/welcome";
import { ProfilPage } from "../pages/profil/profil";
import { MailCheckPage } from "../pages/mail-check/mail-check";
import { ChangepPasswordPage } from "../pages/changep-password/changep-password";
import { UploadPage } from "../pages/upload/upload";
import { EventsPage } from "../pages/events/events";
import { PasswordRequestPage } from "../pages/password-request/password-request";
import { ChoosePlanPage } from "../pages/choose-plan/choose-plan";
import { ShowEventPage } from "../pages/show-event/show-event";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthProvider } from "../providers/auth/auth";
import { ApiProvider } from "../providers/api/api";
import { ProfilproviderProvider } from "../providers/profilprovider/profilprovider";
import { UserProvider } from "../providers/user/user";
import { CameraProvider } from "../providers/util/camera.provider";
import { Camera } from "@ionic-native/camera";
import { EventProvider } from "../providers/event/event";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";

export const PAGES = [
    StoryTellingApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    WelcomePage,
    ProfilPage,
    MailCheckPage,
    ChangepPasswordPage,
    UploadPage,PasswordRequestPage,
    EventsPage,
    ChoosePlanPage,
    ShowEventPage,
];

export const PROVIDERS = [
    // StatusBar,
    // AuthProvider,
    // SplashScreen,
    // ApiProvider,
    // ProfilproviderProvider,
    // UserProvider,
    // CameraProvider,
    // Camera,
    // EventProvider,
    // FileTransfer,
    // FileTransferObject,
    File,
];

export const DIRECTIVES = [
    
  ];
