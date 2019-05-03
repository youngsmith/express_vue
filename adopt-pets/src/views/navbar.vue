<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item><router-link to="/cats">Cats</router-link></b-nav-item>
                <b-nav-item><router-link to="/dogs">Dogs</router-link></b-nav-item>
                <b-nav-item><router-link to="/posts">Posts</router-link></b-nav-item>

                <!-- Navbar dropdowns 
                <img alt="logo" src="../assets/logo.png">
                export default {
                name: 'app',
                components: {
                    PostComponent,
                    Navbar
                }
                }-->
                

                <b-nav-item href="#">Login</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
