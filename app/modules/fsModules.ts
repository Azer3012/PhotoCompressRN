import { NativeModules } from "react-native";

const {fsModule}=NativeModules

type Callback=(message:string)=>void

interface FSModuleInterface{
    justGreetMe(name:string,cb:Callback):void
}

export default fsModule as FSModuleInterface