import {
   // Local storage keys
   AUTH_KEY,
   MASTER_KEY,
   TOTAL_VIEW,
   SECTIONS_CONFIG,
   // Query keys
   ALL_POSTS_QUERY_KEY,
   ALL_MAPS_CONTENT_QUERY_KEY,
   ALL_TEXTADV_QUERY_KEY,
   ALL_IMG_ADV_QUERY_KEY,
   ALL_RELEASE_QUERY_KEY,
   SERVICES_QUERY_KEY,
   SECTIONS_QUERY_KEY,
   CONTACTS_QUERY_KEY,
   EMAIL_QUERY_KEY,
   LATEST_POSTS_KEY,
   TICKETS_QUERY_KEY,
   SERVICES_IMG_KEY,
   TIMELINE_KEY,
   CONTRIBUTION_KEY,
   COMMENTS_KEY,
   // Section query keys
   POSTS_QUERY_KEY,
   MORE_POSTS_QUERY_KEY,
   MAIN_POSTS_QUERY_KEY,
   NEXT_MAIN_QUERY_KEY,
   SINGLE_POST_QUERY_KEY,
   VERTICAL_POSTS_QUERY_KEY,
   SWIPER_SEC,
   MAIN_SPORT_QUERY_KEY,
   DEFAULT_TELETYPE_QUERY_KEY,
   CHRONICLE_TELETYPE_QUERY_KEY,
   MOST_READ_TODAY,
   CHRONICLE_MAIN,
   MUSIC_NEWS,
   HERO_NEWS,
   FEATURE_TRACK_NEWS,
   PLAY_LIST,
   LIVE_EVENT,
   MOST_POPULAR_MUSIC,
   PODCAST_MUSIC,
   TOP_ARTISTS,
   // AI Hub - Templates query key
   AIHUB_MAIN_QUERY_KEY,
   // Mode keys
   DEV_MODE,
   // Themes
   DARKTHEME,
   LIGHTTHEME,
   CUPCAKETHEME,
   BUMBLEBEETHEME,
   EMERALADTHEME,
   CORPORATETHEME,
   SYTHWAVETHEME,
   VALENTINETHEME,
   FORESTTHEME,
   LUXURYTHEME,
   COFFETHEME,
   CARAMELLATTETHEME,
   // Search query
   PROVINCE_KEY,
   COUNTRY_KEY,
} from '../Constants';

describe('Constants', () => {
   describe('Local Storage Keys', () => {
      test('should have correct local storage key values', () => {
         expect(AUTH_KEY).toBe('authenticated');
         expect(MASTER_KEY).toBe('masterEditor');
         expect(TOTAL_VIEW).toBe('total_view');
         expect(SECTIONS_CONFIG).toBe('sectionsConfig');
      });

      test('should have unique local storage keys', () => {
         const localStorageKeys = [AUTH_KEY, MASTER_KEY, TOTAL_VIEW, SECTIONS_CONFIG];
         const uniqueKeys = new Set(localStorageKeys);
         expect(uniqueKeys.size).toBe(localStorageKeys.length);
      });
   });

   describe('Query Keys', () => {
      test('should have correct query key values', () => {
         expect(ALL_POSTS_QUERY_KEY).toBe('all_posts');
         expect(ALL_MAPS_CONTENT_QUERY_KEY).toBe('all_maps_content');
         expect(ALL_TEXTADV_QUERY_KEY).toBe('all_textadv');
         expect(ALL_IMG_ADV_QUERY_KEY).toBe('all_imgadv');
         expect(ALL_RELEASE_QUERY_KEY).toBe('all_release');
         expect(SERVICES_QUERY_KEY).toBe('services');
         expect(SECTIONS_QUERY_KEY).toBe('sections');
         expect(CONTACTS_QUERY_KEY).toBe('contacts');
         expect(EMAIL_QUERY_KEY).toBe('emails');
         expect(LATEST_POSTS_KEY).toBe('latest_posts');
         expect(TICKETS_QUERY_KEY).toBe('tickets');
         expect(SERVICES_IMG_KEY).toBe('services_img');
         expect(TIMELINE_KEY).toBe('timeLine');
         expect(CONTRIBUTION_KEY).toBe('contribution');
         expect(COMMENTS_KEY).toBe('comments');
      });

      test('should have unique query keys', () => {
         const queryKeys = [
            ALL_POSTS_QUERY_KEY,
            ALL_MAPS_CONTENT_QUERY_KEY,
            ALL_TEXTADV_QUERY_KEY,
            ALL_IMG_ADV_QUERY_KEY,
            ALL_RELEASE_QUERY_KEY,
            SERVICES_QUERY_KEY,
            SECTIONS_QUERY_KEY,
            CONTACTS_QUERY_KEY,
            EMAIL_QUERY_KEY,
            LATEST_POSTS_KEY,
            TICKETS_QUERY_KEY,
            SERVICES_IMG_KEY,
            TIMELINE_KEY,
            CONTRIBUTION_KEY,
            COMMENTS_KEY,
         ];
         const uniqueKeys = new Set(queryKeys);
         expect(uniqueKeys.size).toBe(queryKeys.length);
      });
   });

   describe('Section Query Keys', () => {
      test('should have correct section query key values', () => {
         expect(POSTS_QUERY_KEY).toBe('posts');
         expect(MORE_POSTS_QUERY_KEY).toBe('more_posts');
         expect(MAIN_POSTS_QUERY_KEY).toBe('main_posts');
         expect(NEXT_MAIN_QUERY_KEY).toBe('next_main');
         expect(SINGLE_POST_QUERY_KEY).toBe('single_post');
         expect(VERTICAL_POSTS_QUERY_KEY).toBe('vertical_posts');
         expect(SWIPER_SEC).toBe('swiper_sec');
         expect(MAIN_SPORT_QUERY_KEY).toBe('main_sport');
         expect(DEFAULT_TELETYPE_QUERY_KEY).toBe('default_teletype');
         expect(CHRONICLE_TELETYPE_QUERY_KEY).toBe('chronicle_teletype');
         expect(MOST_READ_TODAY).toBe('most_read_today');
         expect(CHRONICLE_MAIN).toBe('chronicle_main');
         expect(MUSIC_NEWS).toBe('music_news');
         expect(HERO_NEWS).toBe('hero_news');
         expect(FEATURE_TRACK_NEWS).toBe('feature_track');
         expect(PLAY_LIST).toBe('play_list');
         expect(LIVE_EVENT).toBe('live_event');
         expect(MOST_POPULAR_MUSIC).toBe('most_popular_music');
         expect(PODCAST_MUSIC).toBe('podcast_music');
         expect(TOP_ARTISTS).toBe('top_artists');
      });

      test('should have unique section query keys', () => {
         const sectionQueryKeys = [
            POSTS_QUERY_KEY,
            MORE_POSTS_QUERY_KEY,
            MAIN_POSTS_QUERY_KEY,
            NEXT_MAIN_QUERY_KEY,
            SINGLE_POST_QUERY_KEY,
            VERTICAL_POSTS_QUERY_KEY,
            SWIPER_SEC,
            MAIN_SPORT_QUERY_KEY,
            DEFAULT_TELETYPE_QUERY_KEY,
            CHRONICLE_TELETYPE_QUERY_KEY,
            MOST_READ_TODAY,
            CHRONICLE_MAIN,
            MUSIC_NEWS,
            HERO_NEWS,
            FEATURE_TRACK_NEWS,
            PLAY_LIST,
            LIVE_EVENT,
            MOST_POPULAR_MUSIC,
            PODCAST_MUSIC,
            TOP_ARTISTS,
         ];
         const uniqueKeys = new Set(sectionQueryKeys);
         expect(uniqueKeys.size).toBe(sectionQueryKeys.length);
      });
   });

   describe('AI Hub, Mode, Themes, and Search Keys', () => {
      test('should have correct values for remaining keys', () => {
         // AI Hub
         expect(AIHUB_MAIN_QUERY_KEY).toBe('aihub_main');

         // Mode
         expect(DEV_MODE).toBe('dev');

         // Themes
         expect(DARKTHEME).toBe('dark');
         expect(LIGHTTHEME).toBe('light');
         expect(CUPCAKETHEME).toBe('cupcake');
         expect(BUMBLEBEETHEME).toBe('bumblebee');
         expect(EMERALADTHEME).toBe('emerald');
         expect(CORPORATETHEME).toBe('corporate');
         expect(SYTHWAVETHEME).toBe('synthwave');
         expect(VALENTINETHEME).toBe('valentine');
         expect(FORESTTHEME).toBe('forest');
         expect(LUXURYTHEME).toBe('luxury');
         expect(COFFETHEME).toBe('coffee');
         expect(CARAMELLATTETHEME).toBe('caramellatte');

         // Search
         expect(PROVINCE_KEY).toBe('province');
         expect(COUNTRY_KEY).toBe('country');
      });

      test('should have unique keys for remaining categories', () => {
         const remainingKeys = [
            AIHUB_MAIN_QUERY_KEY,
            DEV_MODE,
            DARKTHEME, LIGHTTHEME, CUPCAKETHEME, BUMBLEBEETHEME, EMERALADTHEME, CORPORATETHEME,
            SYTHWAVETHEME, VALENTINETHEME, FORESTTHEME, LUXURYTHEME, COFFETHEME, CARAMELLATTETHEME,
            PROVINCE_KEY, COUNTRY_KEY,
         ];
         const uniqueKeys = new Set(remainingKeys);
         expect(uniqueKeys.size).toBe(remainingKeys.length);
      });
   });

   describe('Cross-category uniqueness', () => {
      test('should have unique keys across all categories', () => {
         const allKeys = [
            // Local storage keys
            AUTH_KEY, MASTER_KEY, TOTAL_VIEW, SECTIONS_CONFIG,
            // Query keys
            ALL_POSTS_QUERY_KEY, ALL_MAPS_CONTENT_QUERY_KEY, ALL_TEXTADV_QUERY_KEY, ALL_IMG_ADV_QUERY_KEY, ALL_RELEASE_QUERY_KEY,
            SERVICES_QUERY_KEY, SECTIONS_QUERY_KEY, CONTACTS_QUERY_KEY, EMAIL_QUERY_KEY, LATEST_POSTS_KEY, TICKETS_QUERY_KEY,
            SERVICES_IMG_KEY, TIMELINE_KEY, CONTRIBUTION_KEY, COMMENTS_KEY,
            // Section query keys
            POSTS_QUERY_KEY, MORE_POSTS_QUERY_KEY, MAIN_POSTS_QUERY_KEY, NEXT_MAIN_QUERY_KEY, SINGLE_POST_QUERY_KEY,
            VERTICAL_POSTS_QUERY_KEY, SWIPER_SEC, MAIN_SPORT_QUERY_KEY, DEFAULT_TELETYPE_QUERY_KEY, CHRONICLE_TELETYPE_QUERY_KEY,
            MOST_READ_TODAY, CHRONICLE_MAIN, MUSIC_NEWS, HERO_NEWS, FEATURE_TRACK_NEWS, PLAY_LIST, LIVE_EVENT,
            MOST_POPULAR_MUSIC, PODCAST_MUSIC, TOP_ARTISTS,
            // AI Hub, Mode, Themes, Search
            AIHUB_MAIN_QUERY_KEY, DEV_MODE,
            DARKTHEME, LIGHTTHEME, CUPCAKETHEME, BUMBLEBEETHEME, EMERALADTHEME, CORPORATETHEME,
            SYTHWAVETHEME, VALENTINETHEME, FORESTTHEME, LUXURYTHEME, COFFETHEME, CARAMELLATTETHEME,
            PROVINCE_KEY, COUNTRY_KEY,
         ];

         const uniqueKeys = new Set(allKeys);
         expect(uniqueKeys.size).toBe(allKeys.length);
      });
   });

   describe('Type checking', () => {
      test('all constants should be strings', () => {
         const allConstants = [
            AUTH_KEY, MASTER_KEY, TOTAL_VIEW, SECTIONS_CONFIG,
            ALL_POSTS_QUERY_KEY, ALL_MAPS_CONTENT_QUERY_KEY, ALL_TEXTADV_QUERY_KEY, ALL_IMG_ADV_QUERY_KEY, ALL_RELEASE_QUERY_KEY,
            SERVICES_QUERY_KEY, SECTIONS_QUERY_KEY, CONTACTS_QUERY_KEY, EMAIL_QUERY_KEY, LATEST_POSTS_KEY, TICKETS_QUERY_KEY,
            SERVICES_IMG_KEY, TIMELINE_KEY, CONTRIBUTION_KEY, COMMENTS_KEY,
            POSTS_QUERY_KEY, MORE_POSTS_QUERY_KEY, MAIN_POSTS_QUERY_KEY, NEXT_MAIN_QUERY_KEY, SINGLE_POST_QUERY_KEY,
            VERTICAL_POSTS_QUERY_KEY, SWIPER_SEC, MAIN_SPORT_QUERY_KEY, DEFAULT_TELETYPE_QUERY_KEY, CHRONICLE_TELETYPE_QUERY_KEY,
            MOST_READ_TODAY, CHRONICLE_MAIN, MUSIC_NEWS, HERO_NEWS, FEATURE_TRACK_NEWS, PLAY_LIST, LIVE_EVENT,
            MOST_POPULAR_MUSIC, PODCAST_MUSIC, TOP_ARTISTS,
            AIHUB_MAIN_QUERY_KEY, DEV_MODE,
            DARKTHEME, LIGHTTHEME, CUPCAKETHEME, BUMBLEBEETHEME, EMERALADTHEME, CORPORATETHEME,
            SYTHWAVETHEME, VALENTINETHEME, FORESTTHEME, LUXURYTHEME, COFFETHEME, CARAMELLATTETHEME,
            PROVINCE_KEY, COUNTRY_KEY,
         ];

         allConstants.forEach((constant) => {
            expect(typeof constant).toBe('string');
         });
      });
   });
});