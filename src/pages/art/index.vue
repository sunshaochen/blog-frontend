<template>
  <ArtLayout>
    <div class="a-container">
      <div class="a-hero">
        <h1 class="a-hero-title">{{ general.title }}</h1>
        <h2 class="a-hero-subtitle">{{ general.subTitle }}</h2>
      </div>
      <div class="a-projects">
        <div class="a-project" v-for="project in $page.projects.edges" :key="project.node.id">
          <g-link class="a-project-link" to="/">
            <img
              :src="project.node.cover.url"
              :alt="project.node.title"
              width="2560"
              class="a-thumbnail"
              sizes="(max-width: 2560px) 100vw, 2560px"
            />
            <h3 class="a-project-title">{{project.node.title}}</h3>
            <div class="a-categories">
              <span class="a-category" v-for="category in project.node.art_categories">{{ category.title }}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading a-container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="a-container">
          <g-link class="journal" v-for="journal in $page.journal.edges" :key="journal.node.id">
            <h3 class="journal-title">{{journal.node.title}}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </ArtLayout>
</template>
<page-query>
query {
  generals: allStrapiArtGeneral {
    edges {
      node {
        title
        subTitle
      }
    }
  }
  projects: allStrapiArtProject {
    edges {
      node {
        title
        content
        created_at
        color
        id
        cover {
          url
        }
        art_categories {
          title
        }
      }
    }
  }
  journal: allStrapiArtJournal(limit: 4, , sortBy: "crated_at") {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "artPage",
  computed: {
    general() {
      return this.$page.generals.edges[0].node
    }
  },
}
</script>

<style scoped>
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background .25s ease;
  text-decoration: none;
  border-bottom: 1px solid #f3f3f3;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background .25s ease;
  text-decoration: none;
  border-bottom: 1px solid #f3f3f3;
}

.journal:last-of-type {
  border-bottom: 0
}

.journal:hover {
  background: #f3f3f3;
}

.journal-title {
  font-size: 1rem;
  line-height: 1.35
}

@media (min-width: 580px) {
  .journal {
    flex:0 0 50%
  }

  .journal:first-child {
    border-right: 1px solid #f3f3f3;
  }

  .journal:first-child,.journal:nth-child(2) {
    border-bottom: 1px solid #f3f3f3;
  }

  .journal:nth-child(3) {
    border-right: 1px solid #f3f3f3;
    border-bottom: 0
  }
}

@media (min-width: 920px) {
  .journal {
    flex:0 0 25%
  }

  .journal:first-child,.journal:nth-child(2),.journal:nth-child(3) {
    border: 0;
    border-right: 1px solid #f3f3f3;
  }

  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }
}
.latest-journals>.a-container {
  display: flex;
  flex-wrap: wrap;
}
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: .6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid #ccc;
}

.a-hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
}
.a-hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}
.a-project-link:hover {
  color: #000;
}
img {
  max-width: 100%;
}
.a-thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all .15s ease;
  box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
}
.a-hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: .6;
}
.a-hero-subtitle, .a-hero-subtitle p, .a-hero-title p {
  margin: 0;
  padding: 0;
}
.a-projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.a-project {
  grid-column: auto/span 2;
  text-align: center;
}
@media (min-width: 920px) {
  .a-project:nth-child(3n+1) {
    grid-column: auto/span 2;
  }
  .a-project {
    grid-column: auto/span 1;
  }
}
.a-project-title {
  font-size: 1rem;
  color: #000;
  margin: 2rem 0 1rem;
}
.a-categories {
  font-size: .8rem;
}
.a-category {
  margin-right: .8rem;
}
.a-category:last-of-type {
  margin: 0;
}
</style>