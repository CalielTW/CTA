// Auth
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

// User
export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';
export const CREATE_USER = 'CREATE_USER';
export const GET_USERS_BY_STORE = 'GET_USERS_BY_STORE';
export const CLEAR_OPERATORS = 'CLEAR_OPERATORS';
export const GET_OPERATORS = 'GET_OPERATORS';
export const GET_AGENTS_FORM = 'GET_AGENTS_FORM';

//Roles 
export const GET_ROLES = 'GET_ROLES';
export const CREATE_ROLE = 'CREATE_ROLE';
export const GET_ROLE = 'GET_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const UPDATE_ROLE = 'UPDATE_ROLE';

// Leads
export const GET_TOKEN_UPDATE = 'GET_TOKEN_UPDATE';
export const UPDATE_PAPERWORK = 'UPDATE_PAPERWORK';
export const ASSIGN_LIST = 'ASSIGN_LIST';
export const UPDATE_TASK_FROM_LEAD = 'UPDATE_TASK_FROM_LEAD';
export const DELETE_MANY_LEAD = 'DELETE_MANY_LEAD';
export const GET_ALL_CHART_LEADS_DASH = 'GET_ALL_CHART_LEADS_DASH';
export const CALL_USER = 'CALL_USER';
export const GET_LEAD = 'GET_LEAD';
export const GET_LEADS = 'GET_LEADS';
export const GET_LEADS_BY_STORE = 'GET_LEADS_BY_STORE';
export const GET_LEADS_BY_USER = 'GET_LEADS_BY_USER';
export const UPDATE_LEAD = 'UPDATE_LEAD';
export const DELETE_LEAD = 'DELETE_LEAD';
export const CREATE_LEAD = 'CREATE_LEAD';
export const GET_LEADS_CHART = 'GET_LEADS_CHART';
export const GET_LEADS_BY_STATUS = 'GET_LEADS_BY_STATUS';
export const GET_LEADS_AR = 'GET_LEADS_AR';
export const GET_LEADS_SOLD = 'GET_LEADS_SOLD';
export const GET_LEADS_NEW = 'GET_LEADS_NEW';
export const GET_LEADS_FOLLOW = 'GET_LEADS_FOLLOW';
export const GET_LEADS_DATE = 'GET_LEADS_DATE';
export const GET_LAST_LEADS = 'GET_LAST_LEADS';
export const GET_ALL_CHART_LEADS = 'GET_ALL_CHART_LEADS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

// BDC
export const UPDATE_TASK_FROM_LEADBDC = 'UPDATE_TASK_FROM_LEADBDC';
export const DELETE_MANY_LEADBDC = 'DELETE_MANY_LEADBDC';
export const GET_ALL_CHART_LEADSBDC_DASH = 'GET_ALL_CHART_LEADSBDC_DASH';
export const GET_LEADBDC = 'GET_LEADBDC';
export const GET_LEADSBDC = 'GET_LEADSBDC';
export const GET_LEADSBDC_BY_STORE = 'GET_LEADSBDC_BY_STORE';
export const GET_LEADSBDC_BY_USER = 'GET_LEADSBDC_BY_USER';
export const UPDATE_LEADBDC = 'UPDATE_LEADBDC';
export const DELETE_LEADBDC = 'DELETE_LEADBDC';
export const CREATE_LEADBDC = 'CREATE_LEADBDC';
export const GET_ALL_CHART_LEADSBDC = 'GET_ALL_CHART_LEADSBDC';

// SERVICE
export const UPDATE_TASK_FROM_LEADSERVICE = 'UPDATE_TASK_FROM_LEADSERVICE';
export const DELETE_MANY_LEADSERVICE = 'DELETE_MANY_LEADSERVICE';
export const GET_ALL_CHART_LEADSSERVICE_DASH = 'GET_ALL_CHART_LEADSSERVICE_DASH';
export const GET_LEADSERVICE = 'GET_LEADSERVICE';
export const GET_LEADSSERVICE = 'GET_LEADSSERVICE';
export const GET_LEADSSERVICE_BY_STORE = 'GET_LEADSSERVICE_BY_STORE';
export const GET_LEADSSERVICE_BY_USER = 'GET_LEADSSERVICE_BY_USER';
export const UPDATE_LEADSERVICE = 'UPDATE_LEADSERVICE';
export const DELETE_LEADSERVICE = 'DELETE_LEADSERVICE';
export const CREATE_LEADSERVICE = 'CREATE_LEADSERVICE';
export const GET_ALL_CHART_LEADSSERVICE = 'GET_ALL_CHART_LEADSSERVICE';

// Vehicles
export const GET_VEHICLES = 'GET_VEHICLES';
export const GET_VEHICLE = 'GET_VEHICLE';
export const GET_VEHICLES_BY_MAKE = 'GET_VEHICLES_BY_MAKE';
export const CREATE_VEHICLE = 'CREATE_VEHICLE';
export const DELETE_VEHICLE = 'DELETE_VEHICLE';
export const UPDATE_VEHICLE = 'UPDATE_VEHICLE';

// Makes
export const GET_MAKES = 'GET_MAKES';
export const GET_MAKE = 'GET_MAKE';
export const CREATE_MAKE = 'CREATE_MAKE';
export const DELETE_MAKE = 'DELETE_MAKE';
export const UPDATE_MAKE = 'UPDATE_MAKE';
export const SET_MAKES = 'SET_MAKES';

// Stores
export const GET_STORES = 'GET_STORES';
export const GET_STORES_BY_MAKE = 'GET_STORES_BY_MAKE';
export const GET_STORE = 'GET_STORE';
export const CREATE_STORE = 'CREATE_STORE';
export const DELETE_STORE = 'DELETE_STORE';
export const UPDATE_STORE = 'UPDATE_STORE';
export const GET_ALL_STORES = 'GET_ALL_STORES';
export const UPDATE_ALL_STORES = 'UPDATE_ALL_STORES';
export const UPDATE_USER_STORES = 'UPDATE_USER_STORES';
export const UPDATE_STORE_GROUP = 'UPDATE_STORE_GROUP';
export const UPDATE_ATTRIBUTES_STORES = 'UPDATE_ATTRIBUTES_STORES';

// Templates
export const GET_TEMPLATES = 'GET_TEMPLATES';
export const GET_TEMPLATE = 'GET_TEMPLATE';
export const CREATE_TEMPLATE = 'CREATE_TEMPLATE';
export const DELETE_TEMPLATE = 'DELETE_TEMPLATE';
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';
export const GET_TEMPLATES_BY_STORE = 'GET_TEMPLATES_BY_STORE';

// Social Account
export const GET_SOCIAL_ACCOUNTS = 'GET_SOCIAL_ACCOUNTS';
export const GET_SOCIAL_ACCOUNT = 'GET_SOCIAL_ACCOUNT';
export const CREATE_SOCIAL_ACCOUNT = 'CREATE_SOCIAL_ACCOUNT';
export const DELETE_SOCIAL_ACCOUNT = 'DELETE_SOCIAL_ACCOUNT';
export const UPDATE_SOCIAL_ACCOUNT = 'UPDATE_SOCIAL_ACCOUNT';
export const GET_SOCIAL_ACCOUNTS_BY_STORE = 'GET_SOCIAL_ACCOUNTS_BY_STORE';

// Document
export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const GET_DOCUMENTS_BY_STORE = 'GET_DOCUMENTS_BY_STORE';
export const GET_DOCUMENT = 'GET_DOCUMENT';
export const CREATE_DOCUMENT = 'CREATE_DOCUMENT';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';

// Setting
export const GET_SETTINGS = 'GET_SETTINGS';
export const UPDATE_SETTING = 'UPDATE_SETTING';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const SET_VALUE = 'SET_VALUE';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const SET_MENU = 'SET_MENU';

// Temperature
export const GET_TEMPERATURES = 'GET_TEMPERATURES';
export const GET_TEMPERATURES_BY_MODEL = 'GET_TEMPERATURES_BY_STORE';
export const GET_TEMPERATURE = 'GET_TEMPERATURE';
export const CREATE_TEMPERATURE = 'CREATE_TEMPERATURE';
export const DELETE_TEMPERATURE = 'DELETE_TEMPERATURE';
export const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE';

// Wsp Campaigns
export const GET_WSPCAMPAIGNS = 'GET_WSPCAMPAIGNS';
export const GET_WSPCAMPAIGN = 'GET_WSPCAMPAIGN';
export const CREATE_WSPCAMPAIGN = 'CREATE_WSPCAMPAIGN';
export const DELETE_WSPCAMPAIGN = 'DELETE_WSPCAMPAIGN';
export const UPDATE_WSPCAMPAIGN = 'UPDATE_WSPCAMPAIGN';

// Task
export const GET_TASKS = 'GET_TASKS';
export const GET_TASK = 'GET_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Status
export const GET_STATUSES = 'GET_ALL_STATUS';
export const GET_STATUS = 'GET_STATUS';
export const CREATE_STATUS = 'CREATE_STATUS';
export const DELETE_STATUS = 'DELETE_STATUS';
export const UPDATE_STATUS = 'UPDATE_STATUS';

// Sources
export const GET_SOURCES = 'GET_SOURCES';
export const GET_SOURCE = 'GET_SOURCE';
export const CREATE_SOURCE = 'CREATE_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';
export const UPDATE_SOURCE = 'UPDATE_SOURCE';

// Services
export const GET_SERVICES = 'GET_SERVICES';
export const GET_SERVICE = 'GET_SERVICE';
export const CREATE_SERVICE = 'CREATE_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';

// Packages
export const GET_PACKAGES = 'GET_PACKAGES';
export const GET_PACKAGE = 'GET_PACKAGE';
export const CREATE_PACKAGE = 'CREATE_PACKAGE';
export const DELETE_PACKAGE = 'DELETE_PACKAGE';
export const UPDATE_PACKAGE = 'UPDATE_PACKAGE';

// Visits
export const GET_VISITS = 'GET_VISITS';
export const GET_VISIT = 'GET_VISIT';
export const CREATE_VISIT = 'CREATE_VISIT';
export const DELETE_VISIT = 'DELETE_VISIT';
export const UPDATE_VISIT = 'UPDATE_VISIT';

// Tickets
export const GET_TICKETS = 'GET_TICKETS';
export const GET_NOTIFICATIONS_TICKETS = 'GET_NOTIFICATIONS_TICKETS';
export const GET_TICKET = 'GET_TICKET';
export const CREATE_TICKET = 'CREATE_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const UPDATE_TICKET_LIST = 'UPDATE_TICKET_LIST';

// Sources
export const GET_REMINDERS = 'GET_REMINDERS';
export const GET_REMINDER = 'GET_REMINDER';
export const CREATE_REMINDER = 'CREATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';

// Mails
export const CREATE_MAIL = 'CREATE_MAIL';
export const CREATE_MAIL_ATTACHMENT = 'CREATE_MAIL_ATTACHMENT';

// Mail Marketing
export const GET_STATISTICS = 'GET_STATISTICS';
export const CREATE_LIST = 'CREATE_LIST';
export const GET_LISTS = 'GET_LISTS';
export const GET_LIST = 'GET_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const GET_FILTER_RESULTS = 'GET_FILTER_RESULTS';
export const GET_LIST_BY_STORE = 'GET_LIST_BY_STORE';

export const CREATE_CONTACT = 'CREATE_CONTACT';
export const GET_CONTACTS_BY_LIST = 'GET_CONTACTS_BY_LIST';
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACT = 'GET_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const SEND_CAMPAIGN = 'SEND_CAMPAIGN';
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export const GET_CAMPAIGNS_BY_LIST = 'GET_CAMPAIGNS_BY_LIST';
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS';
export const GET_CAMPAIGN = 'GET_CAMPAIGN';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN';
export const GET_CAMPAIGN_BY_STORE = 'GET_CAMPAIGN_BY_STORE';

// Appointments
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export const GET_APPOINTMENT = 'GET_APPOINTMENT';
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const GET_APPOINTMENTS_BY_USER = 'GET_APPOINTMENTS_BY_USER';
export const GET_APPOINTMENTS_BY_STORE = 'GET_APPOINTMENTS_BY_STORE';
export const GET_APPOINTMENTS_AR = 'GET_APPOINTMENTS_AR';

//Investments
export const GET_INVESTMENTS = 'GET_INVESTMENTS';
export const GET_INVESTMENT = 'GET_INVESTMENT';
export const CREATE_INVESTMENT = 'CREATE_INVESTMENT';
export const DELETE_INVESTMENT = 'DELETE_INVESTMENT';
export const UPDATE_INVESTMENT = 'UPDATE_INVESTMENT';
export const GET_INVESTMENTS_BY_USER = 'GET_INVESTMENTS_BY_USER';
export const GET_INVESTMENTS_BY_STORE = 'GET_INVESTMENTS_BY_STORE';
export const GET_INVESTMENTS_AR = 'GET_INVESTMENTS_AR';

// Activities
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const GET_ACTIVITIES_BY_USER = 'GET_ACTIVITIES_BY_USER';
export const GET_ACTIVITIES_BY_LEAD = 'GET_ACTIVITIES_BY_STORE';
export const GET_ACTIVITIES_AR = 'GET_ACTIVITIES_AR';

// Comments
export const GET_COMMENTS_BY_LEAD = 'GET_COMMENTS_BY_LEAD';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_BY_USER = 'GET_COMMENTS_BY_USER';
export const GET_COMMENTS_BY_STORE = 'GET_COMMENTS_BY_STORE'
export const GET_COMMENT = 'GET_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CLEAR_COMMENT = 'CLEAR_COMMENT';

// Chats
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
export const CLEAR_CURRENT_CHAT = 'CLEAR_CURRENT_CHAT';
export const GET_CHATS = 'GET_CHATS';
export const ADD_CHAT = 'ADD_CHAT';
export const GET_CHATS_BETA = 'GET_CHATS_BETA';
export const ADD_CHAT_BETA = 'ADD_CHAT_BETA';

export const CREATE_BDC = 'CREATE_BDC';
export const ADD_MSG_FROM_CURRENT = 'ADD_MSG_FROM_CURRENT';
export const GET_CHATS_BETA_BY_BUYER = 'GET_CHATS_BETA_BY_BUYER';
export const GET_CHATS_BETA_BY_TO = 'GET_CHATS_BETA_BY_TO';
export const SET_CURRENT_CONVERSATION_ID = 'SET_CURRENT_CONVERSATION_ID';
export const GET_CHATS_BETA_BY_IS_READ = 'GET_CHATS_BETA_BY_IS_READ';
export const ADD_CHATS_BETA_BY_IS_READ = 'ADD_CHATS_BETA_BY_IS_READ';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
export const GET_CHAT_BY_CONVERSATION_ID = 'GET_CHAT_BY_CONVERSATION_ID';
export const CREATE_CONVERSATION_MESSAGE = 'CREATE_CONVERSATION_MESSAGE';
export const CLEAR_CURRENT = 'CLEAR_CURRENT'
export const CONVERSATION_SOCKET = 'CONVERSATION_SOCKET'
export const GET_CONVERSATION = 'GET_CONVERSATION'
export const MESSAGE_SOCKET = 'MESSAGE_SOCKET'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_FINAL = 'SET_FINAL'

//DRILLDOWNS
export const GET_CALLS_DRILLDOWN_CHART = 'GET_CALLS_DRILLDOWN_CHART';
export const GET_BUREAU_DRILLDOWN_CHART = 'GET_BUREAU_DRILLDOWN_CHART';
export const GET_RECORDINGS_DRILLDOWN_CHART = 'GET_RECORDINGS_DRILLDOWN_CHART';
export const GET_DRILLDOWN_FUNNEL_SOURCE = 'GET_DRILLDOWN_FUNNEL_SOURCE';

// Notifications
export const FILTER_NOTIFICATION_BY_IS_READ = 'FILTER_NOTIFICATION_BY_IS_READ';
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'
export const GET_ALL_NOTIFICATIONS_BY_USER = 'GET_ALL_NOTIFICATIONS_BY_USER'
export const GET_ALL_NOTIFICATIONS = 'GET_ALL_NOTIFICATIONS'

// Alert
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

// Profile
export const GET_PROFILE = 'GET_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const GET_PROFILE_BY_USER = 'GET_PROFILE_BY_USER';

// Loading
export const SET_LOADING = 'SET_LOADING';

// Category
export const GET_CATEGORIES = 'GET_CATEGORIES';

// Error
export const SET_ERROR = 'SET_ERROR';

// Review
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const GET_REVIEWS = 'GET_REVIEWS';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

// Success
export const SET_SUCCESS = 'SET_SUCCESS';

// Language
export const SET_LANGUAGE = 'SET_LANGUAGE';

// Clear States
export const CLEAR_STATE = 'CLEAR_STATE';
export const CLEAR_CHARTS_STATE = 'CLEAR_CHARTS_STATE';

// Charts
export const GET_CHART = 'GET_CHART';

// Companies
export const GET_COMPANIES = 'GET_COMPANIES';
export const GET_COMPANY = 'GET_COMPANY';
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const UPDATE_COMPANY = 'UPDATE_COMPANY';

// Closure Information
export const GET_CLOSUREINFORMATIONS = 'GET_CLOSUREINFORMATIONS';
export const GET_CLOSUREINFORMATION = 'GET_CLOSUREINFORMATION';
export const CREATE_CLOSUREINFORMATION = 'CREATE_CLOSUREINFORMATION';
export const DELETE_CLOSUREINFORMATION = 'DELETE_CLOSUREINFORMATION';
export const UPDATE_CLOSUREINFORMATION = 'UPDATE_CLOSUREINFORMATION';

// Conversations
export const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
export const ADD_CONVERSATION = 'ADD_CONVERSATION';
export const SET_CURRENT_CONVERSATION = 'SET_CURRENT_CONVERSATION';
export const GET_MESSAGES = 'GET_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const SET_CURRENT_CONVERSATION_PRO = 'SET_CURRENT_CONVERSATION_PRO';
export const UPDATE_CONVERSATION_LIST = 'UPDATE_CONVERSATION_LIST';
export const UPDATE_CURRENT = 'UPDATE_CURRENT';
export const DELETE_CONVERSATION = 'DELETE_CONVERSATION';
export const UPDATE_AFTER_DELETE = 'UPDATE_AFTER_DELETE';
export const UPDATE_LAST_MESSAGE = 'UPDATE_LAST_MESSAGE';
export const ARCHIVE_CONVERSATION = 'ARCHIVE_CONVERSATION';

// Notifications
export const GET_NOTIFICATIONS_BY_STORE = 'GET_NOTIFICATIONS_BY_STORE';
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export const UPDATE_NOTIFICATION_LIST = 'UPDATE_NOTIFICATION_LIST';
export const DELETE_FROM_NOTIFICATION_LIST = 'DELETE_FROM_NOTIFICATION_LIST';
export const GET_UNREAD_CHATS = 'GET_UNREAD_CHATS';
export const UPDATE_NOTIFICATION_VIEW = 'UPDATE_NOTIFICATION_VIEW';

// Substatuses
export const GET_SUBSTATUSES = 'GET_SUBSTATUSES';
export const GET_SUBSTATUS = 'GET_SUBSTATUS';
export const CREATE_SUBSTATUS = 'CREATE_SUBSTATUS';
export const DELETE_SUBSTATUS = 'DELETE_SUBSTATUS';
export const UPDATE_SUBSTATUS = 'UPDATE_SUBSTATUS';

// Twilio Templates
export const GET_TEMPLATESTWILIO = 'GET_TEMPLATESTWILIO';
export const GET_TEMPLATETWILIO = 'GET_TEMPLATETWILIO';
export const CREATE_TEMPLATETWILIO = 'CREATE_TEMPLATETWILIO';
export const DELETE_TEMPLATETWILIO = 'DELETE_TEMPLATETWILIO';
export const UPDATE_TEMPLATETWILIO = 'UPDATE_TEMPLATETWILIO';
export const GET_TEMPLATESTWILIO_BY_STORE = 'GET_TEMPLATESTWILIO_BY_STORE'

// Recordings
export const GET_RECORDINGS = 'GET_RECORDINGS';
export const GET_RECORDING = 'GET_RECORDING';
export const CREATE_RECORDING = 'CREATE_RECORDING';
export const DELETE_RECORDING = 'DELETE_RECORDING';
export const UPDATE_RECORDING = 'UPDATE_RECORDING';
export const GET_RECORDINGS_BY_LEAD = 'GET_RECORDINGS_BY_LEAD';
export const GET_RECORDINGS_BY_STORE = 'GET_RECORDINGS_BY_STORE'

// AddOn
export const GET_ADDONS = 'GET_ADDONS';
export const GET_ADDON = 'GET_ADDON';
export const CREATE_ADDON = 'CREATE_ADDON';
export const DELETE_ADDON = 'DELETE_ADDON';
export const UPDATE_ADDON = 'UPDATE_ADDON';

// Group
export const GET_GROUPS = 'GET_GROUPS';
export const GET_GROUP = 'GET_GROUP';
export const CREATE_GROUP = 'CREATE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const UPDATE_GROUP = 'UPDATE_GROUP';

// Financial Institutions
export const GET_FINANCIAL_INSTITUTIONS = 'GET_FINANCIAL_INSTITUTIONS';
export const GET_FINANCIAL_INSTITUTION = 'GET_FINANCIAL_INSTITUTION';
export const CREATE_FINANCIAL_INSTITUTION = 'CREATE_FINANCIAL_INSTITUTION';
export const DELETE_FINANCIAL_INSTITUTION = 'DELETE_FINANCIAL_INSTITUTION';
export const UPDATE_FINANCIAL_INSTITUTION = 'UPDATE_FINANCIAL_INSTITUTION';

//Extras
export const SET_MEDIAS = 'SET_MEDIAS'
export const LOAD_CSV = 'LOAD_CSV';
export const SET_DELETING_MANY = 'SET_DELETING_MANY';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const GET_AGENTS = 'GET_AGENTS';
export const ASSIGN_AGENTS = 'ASSIGN_AGENTS';
export const ASSIGN_STATUSES = 'ASSIGN_STATUSES';
export const GET_MATRIX = 'GET_MATRIX';
export const CLEAR_MATRIX = 'CLEAR_MATRIX';
export const SET_AGENT = 'SET_AGENT';
export const LOAD_CORRECT_CSV = 'LOAD_CORRECT_CSV';

//AdCampaign
export const GET_ADCAMPAIGNS = 'GET_ADCAMPAIGNS';
export const CREATE_ADCAMPAIGN = 'CREATE_ADCAMPAIGN';
export const GET_ADCAMPAIGN = 'GET_ADCAMPAIGN';
export const DELETE_ADCAMPAIGN = 'DELETE_ADCAMPAIGN';
export const UPDATE_ADCAMPAIGN = 'UPDATE_ADCAMPAIGN';

//VideoCall
export const SET_VIDEOCALL = 'SET_VIDEOCALL';

//charts

export const GET_FUNNEL_APPOINTMENT_CHART = 'GET_FUNNEL_APPOINTMENT_CHART'
export const GET_APPOINTMENTS_BY_STORE_CHART = 'GET_APPOINTMENTS_BY_STORE_CHART'
export const GET_VISITS_BY_STORE_CHART = 'GET_VISITS_BY_STORE_CHART'
export const GET_SOLDS_BY_STORE_CHART = 'GET_SOLDS_BY_STORE_CHART'
export const GET_MONTHLY_CHART = 'GET_MONTHLY_CHART'
export const GET_MONTHLY_COMPARATIVE_CHART = 'GET_MONTHLY_COMPARATIVE_CHART'
export const GET_UNIT_MONTHLY_COMPARATIVE_CHART = 'GET_UNIT_MONTHLY_COMPARATIVE_CHART'
export const GET_DAILY_CHART = 'GET_DAILY_CHART'
export const GET_MODELS_CHART = 'GET_MODELS_CHART'
export const GET_HOURS_CHART = 'GET_HOURS_CHART'
export const GET_PIE_STATUS_CHART = 'GET_PIE_STATUS_CHART'
export const GET_TOTALS_DASHBOARD = 'GET_TOTALS_DASHBOARD'
export const GET_LEADS_STORE_CHART = 'GET_LEADS_STORE_CHART'
export const GET_LEADS_MONTHLY_CHART = 'GET_LEADS_MONTHLY_CHART'
export const GET_WEEKLY_PROFIT_CHART = 'GET_WEEKLY_PROFIT_CHART'
export const GET_PROFIT_CHART = 'GET_PROFIT_CHART'
export const GET_TOTALS_FINANCING_DASHBOARD = 'GET_TOTALS_FINANCING_DASHBOARD'
export const GET_PROFIT_STORE_CHART = 'GET_PROFIT_STORE_CHART'
export const GET_OPERATION_TYPE_CHART = 'GET_OPERATION_TYPE_CHART'
export const GET_FINANCIAL_INSTITUTION_CHART = 'GET_FINANCIAL_INSTITUTION_CHART'
export const GET_AGENTS_LEADS_TABLE = 'GET_AGENTS_LEADS_TABLE'
export const GET_AGENTS_CALLS_TABLE = 'GET_AGENTS_CALLS_TABLE'
export const GET_STORES_EXTRA_SCORES_TABLE = 'GET_STORES_EXTRA_SCORES_TABLE'
export const GET_STORES_SCORES_TABLE = 'GET_STORES_SCORES_TABLE'
export const GET_AGENTS_VISITS_TABLE = 'GET_AGENTS_VISITS_TABLE'
export const GET_AGENTS_APPOINTMENTS_TABLE = 'GET_AGENTS_APPOINTMENTS_TABLE'
export const GET_AGENTS_SOLDS_TABLE = 'GET_AGENTS_SOLDS_TABLE'
export const GET_MODELS_BY_MAKE_CHART = 'GET_MODELS_BY_MAKE_CHART'
export const GET_CONVERSATIONS_CHART = 'GET_CONVERSATIONS_CHART'
export const GET_MESSAGES_CHART = 'GET_MESSAGES_CHART'
export const GET_NOTIFICATIONS_BY_USER = 'GET_NOTIFICATIONS_BY_USER'
export const GET_TEMPERATURES_CHART = 'GET_TEMPERATURES_CHART'
export const GET_MONTHLY_ADMIN_CHART = 'GET_MONTHLY_ADMIN_CHART'
export const GET_VS_CHART = 'GET_VS_CHART'
export const GET_AGENTS_STATUS_CHART = 'GET_AGENTS_STATUS_CHART'
export const GET_TEMPERATURES_FUNNEL = 'GET_TEMPERATURES_FUNNEL'
export const GET_TEMPERATURES_FUNNEL_RSI = 'GET_TEMPERATURES_FUNNEL_RSI'
export const GET_STATUS_REPORT_CHART = 'GET_STATUS_REPORT_CHART'
export const GET_STATUS_STORES_CHART = 'GET_STATUS_STORES_CHART'
export const GET_STATUS_STORES_CHART_ACUMULATED = 'GET_STATUS_STORES_CHART_ACUMULATED'
export const GET_PROFIT_MODEL_CHART = 'GET_PROFIT_MODEL_CHART'
export const GET_SUBSTATUS_AGENT_CHART = 'GET_SUBSTATUS_AGENT_CHART'
export const GET_APPOINTMENTS_CHART = 'GET_APPOINTMENTS_CHART'
export const GET_APPOINTMENTS_STORES_CHART = 'GET_APPOINTMENTS_STORES_CHART'
export const GET_APPOINTMENTS_DETAILS_CHART = 'GET_APPOINTMENTS_DETAILS_CHART'
export const GET_VISITS_CHART = 'GET_VISITS_CHART'
export const GET_APPOINTMENTS_SUBSTATUS_CHART = 'GET_APPOINTMENTS_SUBSTATUS_CHART'
export const GET_TOTALS_APPOINTMENTS_DASHBOARD = 'GET_TOTALS_APPOINTMENTS_DASHBOARD'
export const GET_VISITS_SUBSTATUS_CHART = 'GET_VISITS_SUBSTATUS_CHART'
export const GET_VISITS_STORES_CHART = 'GET_VISITS_STORES_CHART'
export const GET_VISITS_DETAILS_CHART = 'GET_VISITS_DETAILS_CHART'
export const GET_TOTALS_VISITS_DASHBOARD = 'GET_TOTALS_VISITS_DASHBOARD'
export const GET_CALLS_SUBSTATUS_CHART = 'GET_CALLS_SUBSTATUS_CHART'
export const GET_CALLS_STORES_CHART = 'GET_CALLS_STORES_CHART'
export const GET_CALLS_MAKES_CHART = 'GET_CALLS_MAKES_CHART'
export const GET_CALLS_DETAILS_CHART = 'GET_CALLS_DETAILS_CHART'
export const GET_TOTALS_CALLS_DASHBOARD = 'GET_TOTALS_CALLS_DASHBOARD'
export const GET_CLOSURE_TOP_USERS = 'GET_CLOSURE_TOP_USERS'
export const GET_CONVERSATIONS_BY_AGENT = 'GET_CONVERSATIONS_BY_AGENT'
export const GET_DRILLDOWN_CALLS = 'GET_DRILLDOWN_CALLS'
export const GET_AGENTS_CALLS_CHART = 'GET_AGENTS_CALLS_CHART'
export const GET_CONVERSATIONS_BY_AGENT_CHART = 'GET_CONVERSATIONS_BY_AGENT_CHART'
export const GET_TOTALS_INVESTMENT_DASHBOARD = 'GET_TOTALS_INVESTMENT_DASHBOARD'
export const GET_INVESTMENT_PROFIT_STORE_CHART = 'GET_INVESTMENT_PROFIT_STORE_CHART'
export const GET_INVESTMENT_PROFIT_CHART = 'GET_INVESTMENT_PROFIT_CHART'
export const GET_WEEKLY_INVESTMENT_PROFIT_CHART = 'GET_WEEKLY_INVESTMENT_PROFIT_CHART'
export const GET_PROFIT_SOURCE_CHART = 'GET_PROFIT_SOURCE_CHART'
export const GET_INVESTMENT_BY_STORE_CHART = 'GET_INVESTMENT_BY_STORE_CHART'
export const GET_TEMPERATURES_LEADS_TABLE = 'GET_TEMPERATURES_LEADS_TABLE'
export const GET_TEMPERATURES_APPOINTMENTS_TABLE = 'GET_TEMPERATURES_APPOINTMENTS_TABLE'
export const GET_TEMPERATURES_VISITS_TABLE = 'GET_TEMPERATURES_VISITS_TABLE'
export const GET_TEMPERATURES_SALES_TABLE = 'GET_TEMPERATURES_SALES_TABLE'
export const GET_MONITORING_AGENT = 'GET_MONITORING_AGENT'
export const GET_MONITORING_AGENT_SOURCES = 'GET_MONITORING_AGENT_SOURCES'
export const GET_INVESTMENTS_CHART = 'GET_INVESTMENTS_CHART'
export const GET_TOTAL_TEMPERATURES = 'GET_TOTAL_TEMPERATURES'
export const GET_TEMPERATURES_FUNNEL_RSI_COMPARATIVE = 'GET_TEMPERATURES_FUNNEL_RSI_COMPARATIVE'
export const GET_FUNNEL_DATOS = 'GET_FUNNEL_DATOS'
export const GET_REPORT_SALES = 'GET_REPORT_SALES'
export const GET_HOURS_COMPARATIVE_CHART = 'GET_HOURS_COMPARATIVE_CHART'
export const GET_DRILLDOWN_COMPARATIVE = 'GET_DRILLDOWN_COMPARATIVE'
export const GET_DRILLDOWN_TIME = 'GET_DRILLDOWN_TIME'
export const CLEAR_DRILL_TIME = 'CLEAR_DRILL_TIME'
export const GET_GLOBAL = 'GET_GLOBAL'
export const GET_GLOBAL_SOURCES = 'GET_GLOBAL_SOURCES'
export const GET_CAPTACION_MEDIOS = 'GET_CAPTACION_MEDIOS'
export const GET_RECORDINGS_REVIEWS = 'GET_RECORDINGS_REVIEWS'
export const GET_AGENTS_RECORDINGS = 'GET_AGENTS_RECORDINGS'
export const GET_PENDING_TASKS = 'GET_PENDING_TASKS'
export const CLEAR_RECORDINGS_TABLE = 'CLEAR_RECORDINGS_TABLE'
export const GET_BUREAU_CHART = 'GET_BUREAU_CHART'
export const GET_REPORT_VISITS = 'GET_REPORT_VISITS'
export const GET_MATRIX_INVESTMENT = 'GET_MATRIX_INVESTMENT'
export const GET_MATRIX_SEGMENTATION = 'GET_MATRIX_SEGMENTATION'
export const GET_CREDIT_REQUEST_TABLE = 'GET_CREDIT_REQUEST_TABLE'

// Mail Documentation
export const GET_MAIL_DOCUMENTATIONS = 'GET_MAIL_DOCUMENTATIONS'
export const CREATE_MAIL_DOCUMENTATION = 'CREATE_MAIL_DOCUMENTATION'
export const GET_MAIL_DOCUMENTATION = 'GET_MAIL_DOCUMENTATION'
export const DELETE_MAIL_DOCUMENTATION = 'DELETE_MAIL_DOCUMENTATION'
export const UPDATE_MAIL_DOCUMENTATION = 'UPDATE_MAIL_DOCUMENTATION'
export const GET_MAIL_DOCUMENTATIONS_BY_STORE = 'GET_MAIL_DOCUMENTATIONS_BY_STORE'
export const GET_TEMPERATURES_FUNNEL_APPOINTMENT_COMPARATIVE = 'GET_TEMPERATURES_FUNNEL_APPOINTMENT_COMPARATIVE'

// Recording Test
export const GET_RECORDING_TESTS = 'GET_RECORDING_TESTS'
export const CREATE_RECORDING_TEST = 'CREATE_RECORDING_TEST'
export const GET_RECORDING_TEST = 'GET_RECORDING_TEST'
export const DELETE_RECORDING_TEST = 'DELETE_RECORDING_TEST'
export const UPDATE_RECORDING_TEST = 'UPDATE_RECORDING_TEST'