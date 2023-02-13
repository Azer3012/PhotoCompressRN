package com.compressphoto;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.concurrent.Callable;

public class FSModule extends ReactContextBaseJavaModule {
    public FSModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "fsModule";
    }
    @ReactMethod
    public void justGreetMe(String name, Callback cb){
       cb.invoke("Hi "+ name);
    }
}
