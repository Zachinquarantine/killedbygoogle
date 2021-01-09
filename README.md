<div align="center">
  <img src="public/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>What's Killed in Tech?</h1>
  <p>It's a service that tracks the latest products in tech that are dying, based off of <a href="https://github.com/codyogden/killedbygoogle">Killed by Google</a>!</p>
</div>

<div align="center">

</div>

## Contribute

To add a product, gather the following information:

- Name of Product (`name`)
- Launch Date (`dateOpen`)
- Discontinued Date (`dateClose`)
- Description (`description`)
- Link (`link`) - Relevant link to the source
- Type (`type`) - one of App, Service or Hardware

If you are not familiar with or do not want to use `git`, submit a new issue requesting the change. If you are already familiar with `git`, follow these steps:

1. If you haven't already, start by forking this repository. 
2. Create a new branch in your fork. Name it using the product you want to add.
3. Switch to that branch (should happen automatically if you've just created it) and open the `graveyard.json` file
4. Use the information gathered above to add a JSON entry in the following format (note the alphabetical order of keys):
```
  {
    "dateClose": "YYYY-MM-DD",
    "dateOpen": "YYYY-MM-DD",
    "description": "[Product Name] was a single sentence overview of the product or service.",
    "link": "https://any.link-to-a.source/will/work-and-wikipedia-is-cool",
    "name": "[Product Name]",
    "type": "app|service|hardware"
  }
```
5. Finally, create a Pull Request (PR) using the newly created branch. (Important: DON'T use the `master` branch for the PR). Submit it with the necessary explanations.  

For code contributions outside of `graveyard.json`, check out the Contributing Guide.

### Description
The description should be a single sentence describing the product. It should begin with the products name. For example, "Windows 7 was an operating system created by Microsoft." It will be attached to a generated sentence like "Killed about 5 years ago, Google Reader was an RSS/Atom feed aggregator."

Please be respectful, only use past tense.

### Link
Link should be a resource that mentions the discontinuation date and talks about the product. Wikipedia is perfect.

### Type
The type should be either `app`, `service`, or `hardware` as a string.

### Disclaimer
We are not related to any of the companies mentioned on this site in any way/shape, or form.
