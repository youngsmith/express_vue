<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <img alt="logo" src="../assets/logo.png">
                <b-nav-item href="#">Home</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item href="#">Login</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
