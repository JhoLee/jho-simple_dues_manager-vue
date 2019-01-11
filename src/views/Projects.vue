<template>
  <div class="projects">

    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">

      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects"
                                   :key="project.title">
          <div slot="header">{{project.title}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}
              </div>
              <div>{{ project.content }}</div>

            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'Jho',
          due: '1st Jan 2019',
          status: 'overdue'
        },
        {
          title: 'Sleep...',
          person: 'Someone',
          due: '10th Jan 2019',
          status: 'ongoing'
        },
        {
          title: 'Buy a new Macbook Pro',
          person: 'Jessie',
          due: '20th Dec 2019',
          status: 'ongoing'
        },
        {
          title: 'Buy a new website',
          person: 'James',
          due: '19th Oct 2018',
          status: 'complete'
        },

      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Jho'
      })

    }
  }
}
</script>
