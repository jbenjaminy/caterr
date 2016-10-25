create table if not exists admins (
    id serial primary key,
    username text not null unique,
    password text not null,
    first_name text not null,
    last_name text not null,
    phone integer not null,
    email text not null unique,
    -- choose which type of staff you can supply
    has_waitstaff boolean not null,
    has_bartenders boolean not null,
    has_valets boolean not null,
    has_models boolean not null
);

create table if not exists hosts (
    id serial primary key,
    username text not null unique,
    password text not null,
    company_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    contact_first_name text not null,
    contact_last_name text not null,
    contact_phone integer not null,
    contact_email text not null unique
    company_phone integer,
    company_email text unique,
    website text,
);

create table if not exists hosts (
    id serial primary key,
    username text not null unique,
    password text not null,
    first_name text not null,
    last_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    phone integer not null,
    email text not null unique 
);

-- managers -- staff with extra access
    -- can see all events, who has not replied, who's been offered, phone number and contact info


create table if not exists staff (
    id serial primary key,
    username text not null unique,
    password text not null,
    first_name text not null,
    middle_name text not null,
    last_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    phone integer not null,
    email text not null unique,
    emergency_phone integer not null,
    dob date not null,
    -- 1999-01-08
    start_date date not null,
    us_citizen boolean,
    prior_conviction boolean,
    ss_copy boolean,
    dl_copy boolean,
    dl_num integer,
    dl_exp date,
    tabc boolean,
    tabc_exp date,
    -- base pay rate tied to tabc
    -- last 3 positions/relevant experience
    -- # years catering/food service
    -- don't need start date
    -- desired salary
    -- experience, what they want to be paid, availability, upload resume, ss card
    w4 boolean,
    direct_deposit boolean,
    end_date date, 
    is_active boolean,
    is_lead boolean,
    salary integer,
    waitstaff boolean,
    bartender boolean,
    valet boolean,
    model boolean,
    manager boolean,
    has_eton boolean,
    has_bistro boolean,
    has_shoes boolean,
    has_belt boolean,
    has_tie boolean,
    has_bowtie boolean,
    has_cufflinks boolean,
    has_pants boolean,
    has_white_shirt boolean,
    has_black_shirt boolean,
    has_white_jacket boolean,
    has_black_jacket boolean,
    has_cumberbun boolean,
    has_apron boolean,
    has_bar_tool boolean,
    has_bar_set boolean
);

create table if not exists events (
    id serial primary key,
    host_id integer not null references hosts,
    event_title text not null,
    event_date date not null,
    event_start time not null,
    event_end time not null,
    -- 16:00
    event_address text not null,
    event_city text not null,
    event_state text not null,
    event_zip integer not null,
    num_guests integer not null,
    notes text,
    -- suggest how many of these are necessary
    -- either scott calls back with a quote or they can see quote being generated with selections
    num_waitstaff integer,
    num_bartenders integer,
    num_valet integer,
    attire text
);

create table if not exists events_staff (
    event_id integer not null references events,
    staff_id integer not null references staff,
    responded boolean,
    accepted boolean,
    -- timestamp
);

create table if not exists hosts_staff (
    caterer_id integer not null references caterers,
    staff_id integer not null references staff,
    preferred boolean,
    uneligable boolean,
    notes text,
    -- separate positive and negative feedback and post positive on their dashboard 
);
-- messages