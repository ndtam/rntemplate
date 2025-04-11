/**
 * Enum representing the available routes in the application.
 */
export enum Routes {
  Home = 'Home',
  Posts = 'Posts',
  PostDetail = 'PostDetail',
  Settings = 'Settings',
  User = 'User',
  Profile = 'Profile',
  Explore = 'Explore',

}

/**
 * Represents the parameter types for the root stack navigation.
 */
export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Posts]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Explore]: undefined;
  [Routes.PostDetail]: { id: number, title: string, body: string };
};

export type PostStackParams = {
  [Routes.Posts]: undefined;
  [Routes.PostDetail]: { id: number, title: string, body: string };
};

/**
 * Represents the parameter types for the profile stack routes.
 */
export type ProfileStackParams = {
  [Routes.Settings]: undefined;
  [Routes.Profile]: undefined;
  [Routes.User]: undefined;
};

/**
 * Represents the navigation parameters for the root stack.
 */
export type NavigationParams = RootStackParams;

export default Routes
