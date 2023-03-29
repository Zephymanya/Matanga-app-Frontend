import { rooter } from "./web";

export const head = {
    login:    {
        description: `Connectez-vous sur ${process.env.NEXT_PUBLIC_NAME_SITE} pour accéder à plus des fonctionnalitées`,
        title :`${rooter.login.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    register: {
        description: `Inscrivez-vous sur ${process.env.NEXT_PUBLIC_NAME_SITE} pour accéder à plus des fonctionnalitées`,
        title :`${rooter.register.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    home: {
        description: ``,
        title : `${rooter.home.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    cimetiere: {
        description: ``,
        title : `${rooter.cimetiere.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    defunt: {
        description: ``,
        title :`${rooter.defunt.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    edit_account: {
        description: ``,
        title : `${rooter.user.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    contact: {
        description: ``,
        title : `${rooter.contact.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },

    defunt_slug: {
        description: ``,
        title : `${rooter.defunt.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}`
    },
}