import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    NetlifyCMS({
      config: {
        backend: {
          name: "github",
          repo: "ntohq/ntohq-website",
          branch: "main"
        },
        publish_mode: "editorial_workflow",
        collections: [
          {
            name: "authors",
            label: "Authors",
            folder: "src/content/authors",
            create: true,
            slug: "{{slug}}",
            identifier_field: "name",
            format: "json",
            extension: "json",
            media_folder: "",
            public_folder: "",
            editor: {
              preview: false,
            },
            fields: [
              { name: "name", label: "Name", widget: "string" },
              {
                name: "github_user",
                label: "GitHub User",
                widget: "string",
                required: false,
              },
              {
                name: "linked_in",
                label: "LinkedIn",
                widget: "string",
                required: false,
              },
              {
                name: "email",
                label: "Email",
                widget: "string",
                required: false,
              },
              {
                name: "twitter",
                label: "Twitter",
                widget: "string",
                required: false,
              },
              {
                name: "personal_site",
                label: "Personal Site",
                widget: "string",
                required: false,
              },
              { name: "description", label: "Description", widget: "string" },
              {
                name: "roles",
                label: "Roles",
                widget: "list",
                default: [],
                field: { name: "role", widget: "string" },
              },
            ],
          },
          {
            name: "categories",
            label: "Categories",
            folder: "src/content/categories",
            slug: "{{slug}}",
            identifier_field: "name",
            format: "json",
            extension: "json",
            media_folder: "",
            public_folder: "",
            create: true,
            delete: true,
            fields: [
              {
                name: "name",
                widget: "string",
                label: "Category Name",
              },
              {
                name: "image",
                widget: "image",
                label: "Category Image",
                choose_url: true,
                media_folder: "../../../public/image/categories",
                required: false,
              },
              {
                name: "description",
                widget: "string",
                label: "Category Description",
                required: false,
              },
            ],
          },
          {
            name: "posts",
            label: "Posts",
            folder: "src/content/posts",
            create: true,
            delete: true,
            fields: [
              {
                name: "title",
                widget: "string",
                label: "Title",
              },
              {
                name: "category",
                label: "Category",
                widget: "relation",
                collection: "categories",
                searchFields: ["name"],
                valueField: "name",
              },
              {
                name: "description",
                widget: "string",
                label: "Description",
              },
              {
                label: "Draft",
                name: "draft", 
                widget: "boolean", 
                default: true
              },
              {
                name: "date",
                widget: "date",
                label: "Date",
                date_format: "DD.MM.YYYY",
                time_format: "HH:mm A",
                format: "MMMM D, YYYY - h:mm A",
              },
              {
                label: "Author",
                name: "author",
                widget: "relation",
                collection: "authors",
                searchFields: ["name"],
                valueField: "name",
              },
              {
                label: "Thumbnail",
                name: "image",
                widget: "object",
                fields: [
                  {
                    name: "src",
                    widget: "image",
                    label: "Thumbnail Image",
                    choose_url: true,
                    media_folder: "../../../public/image/blog",
                  },
                  {
                    name: "desc",
                    widget: "string",
                    label: "Thumbnail Description",
                  },
                ],
              },
              {
                name: "body",
                widget: "markdown",
                label: "Body",
              },
            ],
          },
        ],
      },
    }),
    vue(),
  ],
});
