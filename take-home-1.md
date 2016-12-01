# Batching requests

We would like to display a list of 500k employees of a big corporation in a single list on a page (SPA). The `get()` function below accepts a list of indicies (positions of an employee in a list) and makes a request to the server, updating the data in a local store.

Expand/update the code below to optimize for performance. Below are some pointers to get you started. It’s better to address a few of these points fully, rather that to produce an incomplete solution to all of them. We are looking for code, not prose - you will have a chance to explain your design solutions on-site.

1. How can we cache the data we fetch from the server locally to avoid requesting the same pieces of information over and over?
2. What about requests where the resulting data are/will no longer be needed. How would we cancel those?
3. How can we make sure we don’t make too many requests at the same time, making sure that we make say at most 1 request per 500ms?
4. How can we collect the requests for data and send them in batches?
5. How would we handle a loading state of an employee row?
6. What if we want to limit the number of items we want to keep/cache locally to say 200 items?
7. What if we scroll a large chunk of the list say every 200ms, never getting to see the data that we get back. How could we cancel requests like this?

Use any library you feel appropriate.
