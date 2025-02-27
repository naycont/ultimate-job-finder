// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md } from 'vuetify/iconsets/md'

import colors from 'vuetify/util/colors'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#006EDB',
          secondary: '#6fa2d0',//colors.blueGrey.base,
          accent: colors.pink.darken1,
        }
      }
    }
  }
})
