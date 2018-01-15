# SOCI Take home technical (front end) #
## Work Log ##
                    Total Time Spent:                   |
                    ------------------------------------|------
                    Research & Learning                 |15h30m
                    Mock-up                             | 1h
                    Post total & aproval status totals  | 0h30m
                    Pagination                          | 2h
                    Sort                                | 4h
                    Search                              | 4h
                    List display                        | 4h
                    Click Event + Details View          | 4h
                    Hover Event + Delete button         | 2h
                    ------------------------------------|------
                    Total                               | 37h

### Research & Learning ### 
- Learn Backbone                                        (10 hours)
- Review Underscore helper functions                    (30 minutes)
- Review JQuery & how it fits into the project          (1 hour) 
- Review project files and structure                    (1 hour)
- locate mock data and study structure                  (1 hour)
- learn how to interpolate data within the template     (2 hours)

### Mock-up ###                                         (1 hour)
- outline components
- consider user interation

### Prioritize Requirements ###
- General data about the list should be shown somewhere in the container:

<!-- Post total & aproval status totals (30 minutes) -->
- Display totals  (30 minutes)
    - Number of total list items
    - Number of "approved" posts
        - These are posts with `customer_approved` and `manager_approved` values equal to 1
    - Number of "pending" posts
        - These are posts with `customer_approved` or `manager_approved` (or both) equal to 0
    - Number of "rejected" posts
        - These are posts with `customer_approved` or `manager_approved` (or both) equal to -1

- There should be a PAGED, SORTABLE, SEARCHABLE list of scheduled posts:
    - Assume that you will always have a complete set of local data (don't worry about service calls)

    <!-- Pagination (2 hours) -->
    - Page limit of 5 items
    - Paging controls:  (2 hours)
        - Next page
        - Previous page
        - Next/Previous buttons should be visible but appear disabled when not applicable (i.e., when on the first or last page)

    <!-- Sort (4 hours) -->
    - Sort by:  (4 hours)
        - `schedule` date (ascending and descending)
        - `created_at` date (ascending and descending)
        - `created_by_name` (ascending and descending)

    <!-- Search (4 hours) -->
    - Search by:  (4 hours)
        - `message` text
        - `created_by_name`


- Scheduled Post List Items:

    <!-- List display (4 hours) -->
    - Should display at least the following information:  (4 hours)
        - A single-line snippet of the message text
        - The date/time for which the post is scheduled
        - The network TYPE (i.e. facebook) for which the post is scheduled
        - Some kind of indication of its approval status

    - Should have the following interactions:
        <!-- Click Event + Details View (4 hours) -->
        - "Click" on a list item should bring up a small dialog box showing:  (4 hours)
            - The full message text
            - The date/time for which the post is scheduled
            - The network TYPE (i.e. facebook) for which the post is scheduled
            - The network NAME
            - The network thumbnail
            - The date/time the post the date was created
            - The name of the person who created the post
            - An indication of its approval status

        <!-- Hover Event + Delete button (2 hours) -->
        - "Hover" on a list item should show a "delete" button  (2 hours)
            - "Click" on the delete button should remove the post from both the collection and the list.

### TODOs ###
- Bugfix: Select element value not updating on change (re-render)
- Bugfix: Network Thumbnail error (URL signature expired)
