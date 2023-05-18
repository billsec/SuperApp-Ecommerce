package io.ionic.demo.ecommerce;

import android.app.Application;
import android.content.Context;

import com.capacitorjs.plugins.camera.CameraPlugin;

import java.util.Arrays;
import java.util.HashMap;

import io.ionic.demo.ecommerce.data.ShoppingCart;
import io.ionic.demo.ecommerce.plugins.ShopAPIPlugin;
import io.ionic.demo.ecommerce.portals.FadePortalFragment;
import io.ionic.portals.PortalManager;
import io.ionic.portals.PortalsPlugin;

/**
 * The parent Application Class for the E-Commerce app.
 */
public class EcommerceApp extends Application {

    /**
     * A single instance of this class.
     */
    private static EcommerceApp instance;

    /**
     * The active shopping cart used for this shopping session.
     */
    private ShoppingCart shoppingCart;

    /**
     * Get the singleton instance of the app class.
     *
     * @return A singleton instance of the app class.
     */
    public static EcommerceApp getInstance() {
        return instance;
    }

    /**
     * Gets the application context from the singleton instance of the app class.
     *
     * @return The application context.
     */
    public static Context getContext() {
        return instance.getApplicationContext();
    }

    /**
     * Get the active shopping cart state used for this shopping session.
     *
     * @return The shopping cart for the current shopping session.
     */
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    /**
     * Saves a reference to the application object on app launch and creates a fresh
     * shopping cart to be used for the shopping session.
     */
    @Override
    public void onCreate() {
        instance = this;
        super.onCreate();

        // Start app with a fresh shopping cart
        shoppingCart = new ShoppingCart();

        // Register Portals
         PortalManager.register("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyNmYyNTE3Yy1kODAyLTQxNzUtYThhMy1kZjIxMWU0NWEwZjEiLCJqdGkiOiJVNV83LVkzUHp1SU1LbHp2dHRJcFhsRzNxRVRCWmNpQmxva0RGc3hyUEFvIn0.jQEzuo84PsBtQs6sa9qq8ZdIFjgMCz4rTjO9Wzz1RgkLhYC6MgyrEYV5g9mkMQ00l8aO5TobWWoDIfoU5JEzd-GJDf4F5RftY1CuIOPHwGG0xXdeK0rEWRvnOwjIF-EsrkYQJTVkH46e3CILNB_YGRaF1IakTORGOVJFLSOy9acCvyQSO0M2dtDl9YAeeViC5aiM7HRnZY3iRdzDkfNbFvQNIygqXPri00ytLrY8fvb8Kx2vu-ycPl3ZporPe-SnWBjNRySgnivYPaSUOc1PFUYmQ9NcogZoSbsdZVJceyjzpO0Qgtory8vJ48Rxna6-Jijtcmf-9h9mzTh5QnHfdQ");

        // Checkout Portal
        PortalManager.newPortal("checkout")
                .setStartDir("webapp")
                .setPlugins(Arrays.asList(ShopAPIPlugin.class))
                .create();

        // Help Portal
        HashMap<String, String> initialContext = new HashMap<>();
        initialContext.put("startingRoute", "/help");
        PortalManager.newPortal("help")
                .setStartDir("webapp")
                .setInitialContext(initialContext)
                .setPlugins(Arrays.asList(ShopAPIPlugin.class))
                .setPortalFragmentType(FadePortalFragment.class)
                .create();

        // Profile Portal
        HashMap<String, String> initialContextProfile = new HashMap<>();
        initialContextProfile.put("startingRoute", "/user");
        PortalManager.newPortal("profile")
                .setStartDir("webapp")
                .addPlugin(ShopAPIPlugin.class)
                .addPlugin(CameraPlugin.class)
                .setInitialContext(initialContextProfile)
                .create();
    }
}
