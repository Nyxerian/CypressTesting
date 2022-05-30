Trials and Process of Cypress testing "test"

Day One (Thursday 26th May 2022)
After reading through the testing plan and specifications, and discussion with my senior, I grouped each section into their own test file.

Section one: Dashboard
After some basic syntax errors, I managed to group specific tasks together as to streamline the process. The only issue I am having is with checking the dashboard data containing specific words as it seems that there is additional 'text' witin the title. According to Cypress, even though I am just selecting: cy.get('[data-cy="totalDevicesChart"] > .overview-title')
it includes much more thank just "Total # of Accounts Activated" 

'<div.overview-box>' to have text 'Total # of Accounts Activated', but the text was '\n Total # of Accounts Activated\n \n 0\n \n \n \n 26 May 2022\n \n 26 May 2022\n \n 26 May 2022\n \n 26 May 2022\n    '

I have spokent to my senior and will try his suggestions. Will come back to this issue. 
EDIT (Friday): Figured it out using 'include.text' instead of 'have.text'

Second issue i've encountered is trying to confirm the selector options in the dropdown selector. Will come back to this too. 
EDIT (Friday): Still working on this issue. Senior has given me some help with syntax for correct usage of '.contains()' keyword. Login is currently down due to CORS issue. will try when its up and running again.

Section two: Groups
I have created a function to navigate to the groups tab and create a group with specified information. My issues comes due to = it trying to create the same group for each test. Have multiple test groups now and cannot proceed until I find a way to delete groups. I have asked a senior for assistance as there is no clear way to delete groups on the site. EDIT: Have managed to delete test groups, but trying to recreate a group with a previously deleted name still gives an error of that group "existing" even after its been deleted.

Issue with selecting IO Digital option from the dropdown menu on the 3rd page of group creation is not working because it is not a <select> element, but a <div> element. Frustration grows...

Section three: Properties

I had a lot of issues with dropdown menus, even with the help - and the hover activated dropdowns were even worse but i've managed to get it working. The bulk of the work seems to be done even with the disruption on Friday. I was worried when I couldnt login to the testing over the weekend and thought I would need more time but it seems my subconscious has been working anyway and I feel even more at ease with writing the code today.

I both love the click() keyword and hate it. Sometimes it works and sometimes, even though I used it in exactly the same way previously, it doesn't and the issue is always around dropdowns and selectors that are NOT selectors due to them being made either with a custom UI or bootstrap.
  
  
I have completed all 3 main tasks barring the validations and checking status - will have to ask Michael how that would work. I read about validations over the weekend and hope to impliment them into the code after lunch in order to improve it. No idea how i'll do the "Clean Up" task as it would require individual targeting - will see what Michael thinks and maybe he could set me on the path to finding it out for myself.
  
Section four:
  I've been requested to write some code that will "clean up" (delete) any new group and property my test creates.
 
  
CODE IMPROVEMENT:
  12pm Monday 30th May: I have started adding validations to my code. Hopefully it works as intended.
  EDIT: Validations added in areas requested in the code.

  
 Section four:
