<template>
    <div class="dashboard">

        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5">

            <v-layout row class="mb-3">
                <v-btn small flat color="grey" @click="sortBy('title')">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By project name</span>
                </v-btn>
                <v-btn small flat color="grey" @click="sortBy('person')">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-lowercase">By person</span>
                </v-btn>
            </v-layout>


            <v-card flat v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>{{project.title}}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{project.person}}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{project.due}}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="right">
                            <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}
                            </v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                projects: [
                    {title: 'Design a new website', person: 'Jho', due: '1st Jan 2019', status: 'overdue'},
                    {title: 'Sleep...', person: 'Someone', due: '10th Jan 2019', status: 'ongoing'},
                    {title: 'Buy a new Macbook Pro', person: 'Jessie', due: '20th Dec 2019', status: 'ongoing'},
                    {title: 'Buy a new website', person: 'James', due: '19th Oct 2018', status: 'complete'},

                ]
            }
        },
        methods: {
            sortBy(prop) {
                this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
            }
        }
    }
</script>

<style scoped>

    .project.complete {
        border-left: 4px solid #3CD1C2;
    }

    .project.ongoing {
        border-left: 4px solid orange;
    }

    .project.overdue {
        border-left: 4px solid tomato;
    }

    .v-chip.complete {
        background: #3CD1C2;
    }

    .v-chip.ongoing {
        background: orange;
    }

    .v-chip.overdue {
        background: tomato;
    }
</style>
