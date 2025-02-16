import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import * as AdminJSMongoose from "@adminjs/mongoose";
import { Product } from "../models/product.js";
import { Category } from "../models/category.js";
import { Order } from "../models/order.js";
import { User } from "../models/user.js";
import { Transaction } from "../models/transaction.js";
import { dark, light, noSidebar } from "@adminjs/themes";
import dotenv from "dotenv"
dotenv.config()

const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD

AdminJS.registerAdapter(AdminJSMongoose); 

const DEFAULT_ADMIN = {
  email: "salmanshaikh.space@gmail.com",
  password: "1234",
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

export const buildAdminJS = async (app) => {
  const admin = new AdminJS({
    resources: [
        { resource: Product },
        { resource: Category },
        { resource: Order },
        { resource: User },
        { resource: Transaction },
      ],
      
    branding: {
      companyName: "Ecommerce_app",
      withMadeWithLove: false,
      favicon:
        "https://unsplash.com/photos/a-lamb-logo-on-a-black-background-ze5wHM9kplc",
      logo: "https://unsplash.com/photos/a-lamb-logo-on-a-black-background-ze5wHM9kplc",
    },
    defaultTheme: dark.id,
    availableThemes: [dark, light, noSidebar],
    rootPath: "/admin",
  });

  const MongodDBStore = ConnectMongoDBSession(session);

  const sessionStore = new MongodDBStore({
    uri: process.env.MONGO_URI,
    collection: "sessions",
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: COOKIE_PASSWORD,
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: COOKIE_PASSWORD,
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "adminjs",
    }
  );

  app.use(admin.options.rootPath, adminRouter);
};
