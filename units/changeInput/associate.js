var linkToThis = {
    "groups": [
        {
            "menus":2,
            "title": "A"
        },
        {
            "menus": [
                {
                    "link": "input",
                    "title": "Input"
                }
            ],
            "title": "Design"
        }
    ]
};

mergeJson(getModel('VerticalMenu'), linkToThis, "title", "title");


//getModel('VerticalMenu').groups = linkToThis.groups;