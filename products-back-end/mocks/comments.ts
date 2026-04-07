import { randomUUID } from 'crypto';

const getMockData = () => {
  const data = [
    {
      commentId: 'c001',
      authorId: 'user_101',
      title: 'Great article!',
      content:
        'This was really informative and well-written. Thanks for sharing your insights on this topic.',
      createdAt: '2025-08-15T09:23:45Z',
      updatedAt: '2025-08-15T09:23:45Z',
      subComments: [
        {
          commentId: 'c001-s1',
          authorId: 'user_302',
          title: 'Agreed!',
          content:
            "Couldn't agree more. This is one of the best explanations I've seen.",
          createdAt: '2025-08-15T10:45:12Z',
          updatedAt: '2025-08-15T10:45:12Z',
        },
        {
          commentId: 'c001-s2',
          authorId: 'user_445',
          title: 'Same here',
          content: "I've bookmarked this for future reference. Very helpful!",
          createdAt: '2025-08-15T14:22:30Z',
          updatedAt: '2025-08-15T14:22:30Z',
        },
      ],
    },
    {
      commentId: 'c002',
      authorId: 'user_203',
      title: 'Question about implementation',
      content:
        'How would this approach scale when dealing with larger datasets? Any recommendations?',
      createdAt: '2025-08-16T14:12:30Z',
      updatedAt: '2025-08-17T08:45:00Z',
      subComments: [
        {
          commentId: 'c002-s1',
          authorId: 'user_567',
          title: 'Good question',
          content:
            'I had the same concern. Would love to hear from someone with experience.',
          createdAt: '2025-08-16T15:33:21Z',
          updatedAt: '2025-08-16T15:33:21Z',
        },
        {
          commentId: 'c002-s2',
          authorId: 'user_178',
          title: 'My experience',
          content:
            "We've used this with datasets of 1M+ records. Works fine with proper indexing.",
          createdAt: '2025-08-17T09:15:45Z',
          updatedAt: '2025-08-17T09:15:45Z',
        },
        {
          commentId: 'c002-s3',
          authorId: 'user_203',
          title: 'Thanks!',
          content: "That's reassuring to hear. Will give it a try.",
          createdAt: '2025-08-17T11:42:08Z',
          updatedAt: '2025-08-17T11:42:08Z',
        },
      ],
    },
    {
      commentId: 'c003',
      authorId: 'user_087',
      title: 'Helpful tip',
      content:
        'I found that using caching significantly improved performance in my implementation.',
      createdAt: '2025-08-18T11:05:22Z',
      updatedAt: '2025-08-18T11:05:22Z',
      subComments: [
        {
          commentId: 'c003-s1',
          authorId: 'user_234',
          title: 'What caching solution?',
          content:
            'Which caching solution did you use? Redis or something else?',
          createdAt: '2025-08-18T12:30:15Z',
          updatedAt: '2025-08-18T12:30:15Z',
        },
        {
          commentId: 'c003-s2',
          authorId: 'user_087',
          title: 'Redis',
          content:
            'Yes, Redis with a 5-minute TTL worked great for our use case.',
          createdAt: '2025-08-18T14:18:42Z',
          updatedAt: '2025-08-18T14:18:42Z',
        },
      ],
    },
    {
      commentId: 'c004',
      authorId: 'user_342',
      title: 'Disagree with this point',
      content:
        "I think the second approach mentioned has some flaws that weren't addressed in the article.",
      createdAt: '2025-08-19T16:33:10Z',
      updatedAt: '2025-08-20T09:15:45Z',
      subComments: [
        {
          commentId: 'c004-s1',
          authorId: 'user_621',
          title: 'Can you elaborate?',
          content:
            "What specific flaws are you referring to? I'd like to understand better.",
          createdAt: '2025-08-19T17:45:30Z',
          updatedAt: '2025-08-19T17:45:30Z',
        },
        {
          commentId: 'c004-s2',
          authorId: 'user_342',
          title: 'Memory issues',
          content:
            "Mainly memory leaks when handling circular references. It's a known issue.",
          createdAt: '2025-08-20T10:22:18Z',
          updatedAt: '2025-08-20T10:22:18Z',
        },
        {
          commentId: 'c004-s3',
          authorId: 'user_101',
          title: 'Valid point',
          content:
            "That's a fair criticism. The author should address this in an update.",
          createdAt: '2025-08-20T14:55:33Z',
          updatedAt: '2025-08-20T14:55:33Z',
        },
      ],
    },
    {
      commentId: 'c005',
      authorId: 'user_156',
      title: 'Thanks for the clarification',
      content:
        'This cleared up a lot of confusion I had about the topic. Much appreciated!',
      createdAt: '2025-08-20T08:47:55Z',
      updatedAt: '2025-08-20T08:47:55Z',
      subComments: [
        {
          commentId: 'c005-s1',
          authorId: 'user_433',
          title: 'Same boat',
          content: 'I was confused too until I read this. Crystal clear now.',
          createdAt: '2025-08-20T10:15:22Z',
          updatedAt: '2025-08-20T10:15:22Z',
        },
      ],
    },
    {
      commentId: 'c006',
      authorId: 'user_421',
      title: 'Additional resource',
      content:
        "For anyone interested, there's a great follow-up paper on this subject that dives deeper into the technical details.",
      createdAt: '2025-08-21T13:28:40Z',
      updatedAt: '2025-08-21T13:28:40Z',
      subComments: [
        {
          commentId: 'c006-s1',
          authorId: 'user_756',
          title: 'Link please?',
          content:
            "Could you share the link to that paper? I'd love to read it.",
          createdAt: '2025-08-21T14:45:18Z',
          updatedAt: '2025-08-21T14:45:18Z',
        },
        {
          commentId: 'c006-s2',
          authorId: 'user_421',
          title: 'Here you go',
          content: 'Just updated my original comment with the link. Enjoy!',
          createdAt: '2025-08-21T15:30:42Z',
          updatedAt: '2025-08-21T15:30:42Z',
        },
      ],
    },
    {
      commentId: 'c007',
      authorId: 'user_089',
      title: 'Bug report',
      content:
        'I noticed the code sample in section 3 has a syntax error on line 12. Might want to fix that.',
      createdAt: '2025-08-22T10:55:18Z',
      updatedAt: '2025-08-22T15:30:00Z',
      subComments: [
        {
          commentId: 'c007-s1',
          authorId: 'user_512',
          title: 'Confirmed',
          content: 'I can confirm this bug. Missing a closing bracket.',
          createdAt: '2025-08-22T11:42:30Z',
          updatedAt: '2025-08-22T11:42:30Z',
        },
        {
          commentId: 'c007-s2',
          authorId: 'user_267',
          title: 'Fixed now',
          content: 'Looks like the author fixed it. Works correctly now.',
          createdAt: '2025-08-22T16:18:55Z',
          updatedAt: '2025-08-22T16:18:55Z',
        },
        {
          commentId: 'c007-s3',
          authorId: 'user_089',
          title: 'Great!',
          content: 'Awesome, thanks for the quick fix!',
          createdAt: '2025-08-22T17:05:12Z',
          updatedAt: '2025-08-22T17:05:12Z',
        },
      ],
    },
    {
      commentId: 'c008',
      authorId: 'user_567',
      title: 'Well explained',
      content:
        'The diagrams really helped me understand the concept. Visual learners will appreciate this.',
      createdAt: '2025-08-23T07:14:33Z',
      updatedAt: '2025-08-23T07:14:33Z',
      subComments: [
        {
          commentId: 'c008-s1',
          authorId: 'user_134',
          title: 'Diagrams are key',
          content: 'Absolutely! A picture is worth a thousand words.',
          createdAt: '2025-08-23T09:22:45Z',
          updatedAt: '2025-08-23T09:22:45Z',
        },
      ],
    },
    {
      commentId: 'c009',
      authorId: 'user_234',
      title: 'Performance concerns',
      content:
        'Has anyone benchmarked this against the traditional approach? Curious about the actual numbers.',
      createdAt: '2025-08-24T19:42:05Z',
      updatedAt: '2025-08-24T19:42:05Z',
      subComments: [
        {
          commentId: 'c009-s1',
          authorId: 'user_678',
          title: 'I did benchmarks',
          content: 'Ran some tests last week. About 30% faster on average.',
          createdAt: '2025-08-24T21:15:33Z',
          updatedAt: '2025-08-24T21:15:33Z',
        },
        {
          commentId: 'c009-s2',
          authorId: 'user_390',
          title: 'Similar results',
          content:
            'My benchmarks show 25-35% improvement depending on input size.',
          createdAt: '2025-08-25T08:42:18Z',
          updatedAt: '2025-08-25T08:42:18Z',
        },
      ],
    },
    {
      commentId: 'c010',
      authorId: 'user_678',
      title: 'Bookmarked!',
      content:
        'This is going straight into my reference collection. Excellent work on compiling all this information.',
      createdAt: '2025-08-25T12:08:27Z',
      updatedAt: '2025-08-25T12:08:27Z',
      subComments: [
        {
          commentId: 'c010-s1',
          authorId: 'user_145',
          title: 'Same!',
          content: 'Added to my Notion knowledge base. Pure gold.',
          createdAt: '2025-08-25T13:30:42Z',
          updatedAt: '2025-08-25T13:30:42Z',
        },
        {
          commentId: 'c010-s2',
          authorId: 'user_823',
          title: 'Sharing widely',
          content:
            'Already shared this with my entire team and on our Slack channel.',
          createdAt: '2025-08-25T15:18:55Z',
          updatedAt: '2025-08-25T15:18:55Z',
        },
      ],
    },
    {
      commentId: 'c011',
      authorId: 'user_145',
      title: 'Minor correction needed',
      content:
        'The formula in paragraph 4 should use multiplication, not addition. Otherwise great content!',
      createdAt: '2025-08-26T15:36:49Z',
      updatedAt: '2025-08-27T10:22:15Z',
      subComments: [
        {
          commentId: 'c011-s1',
          authorId: 'user_401',
          title: 'Good catch',
          content: 'Nice catch! I almost missed that. Important distinction.',
          createdAt: '2025-08-26T17:22:30Z',
          updatedAt: '2025-08-26T17:22:30Z',
        },
      ],
    },
    {
      commentId: 'c012',
      authorId: 'user_390',
      title: 'Real world application',
      content:
        'We implemented this at our company last month and saw a 40% improvement in processing time.',
      createdAt: '2025-08-27T09:21:14Z',
      updatedAt: '2025-08-27T09:21:14Z',
      subComments: [
        {
          commentId: 'c012-s1',
          authorId: 'user_712',
          title: 'Impressive!',
          content: '40% is huge! What was your baseline before the change?',
          createdAt: '2025-08-27T10:45:22Z',
          updatedAt: '2025-08-27T10:45:22Z',
        },
        {
          commentId: 'c012-s2',
          authorId: 'user_390',
          title: 'Previous setup',
          content:
            "We were averaging 2.5 seconds per request. Now it's about 1.5 seconds.",
          createdAt: '2025-08-27T12:18:45Z',
          updatedAt: '2025-08-27T12:18:45Z',
        },
        {
          commentId: 'c012-s3',
          authorId: 'user_189',
          title: 'Great improvement',
          content:
            "That's a significant improvement for user experience. Well done!",
          createdAt: '2025-08-27T14:33:10Z',
          updatedAt: '2025-08-27T14:33:10Z',
        },
      ],
    },
    {
      commentId: 'c013',
      authorId: 'user_512',
      title: 'Newbie question',
      content:
        'Is there a prerequisite knowledge I should have before diving into this topic?',
      createdAt: '2025-08-28T18:04:52Z',
      updatedAt: '2025-08-28T18:04:52Z',
      subComments: [
        {
          commentId: 'c013-s1',
          authorId: 'user_267',
          title: 'Basics first',
          content:
            "I'd recommend understanding the fundamentals of data structures first.",
          createdAt: '2025-08-28T19:30:18Z',
          updatedAt: '2025-08-28T19:30:18Z',
        },
        {
          commentId: 'c013-s2',
          authorId: 'user_634',
          title: 'Also algorithms',
          content:
            'Basic algorithm knowledge helps too. Big O notation especially.',
          createdAt: '2025-08-29T08:15:42Z',
          updatedAt: '2025-08-29T08:15:42Z',
        },
      ],
    },
    {
      commentId: 'c014',
      authorId: 'user_267',
      title: 'Follow-up request',
      content:
        'Would love to see a part 2 that covers the advanced use cases mentioned at the end.',
      createdAt: '2025-08-29T11:57:38Z',
      updatedAt: '2025-08-29T11:57:38Z',
      subComments: [
        {
          commentId: 'c014-s1',
          authorId: 'user_891',
          title: 'Seconded',
          content:
            "Yes please! I'd especially like to see the distributed systems part.",
          createdAt: '2025-08-29T13:22:45Z',
          updatedAt: '2025-08-29T13:22:45Z',
        },
        {
          commentId: 'c014-s2',
          authorId: 'user_356',
          title: 'Part 2 needed',
          content:
            'Adding my vote for a follow-up article. This was too good to end here.',
          createdAt: '2025-08-29T16:45:30Z',
          updatedAt: '2025-08-29T16:45:30Z',
        },
      ],
    },
    {
      commentId: 'c015',
      authorId: 'user_433',
      title: 'Sharing with team',
      content:
        'Just shared this with my entire engineering team. This is exactly what we needed.',
      createdAt: '2025-08-30T14:45:21Z',
      updatedAt: '2025-08-30T14:45:21Z',
      subComments: [
        {
          commentId: 'c015-s1',
          authorId: 'user_623',
          title: 'Team approved',
          content:
            'Our team lead loved it too. Now part of our onboarding docs.',
          createdAt: '2025-08-30T16:18:33Z',
          updatedAt: '2025-08-30T16:18:33Z',
        },
      ],
    },
    {
      commentId: 'c016',
      authorId: 'user_101',
      title: 'Updated thoughts',
      content:
        'After implementing this myself, I have some additional insights to share with the community.',
      createdAt: '2025-09-01T08:33:07Z',
      updatedAt: '2025-09-02T16:18:30Z',
      subComments: [
        {
          commentId: 'c016-s1',
          authorId: 'user_445',
          title: 'Please share!',
          content:
            'Would love to hear your insights. Please write a blog post!',
          createdAt: '2025-09-01T10:22:45Z',
          updatedAt: '2025-09-01T10:22:45Z',
        },
        {
          commentId: 'c016-s2',
          authorId: 'user_101',
          title: 'Coming soon',
          content: 'Working on a detailed write-up. Should be ready next week.',
          createdAt: '2025-09-02T17:45:18Z',
          updatedAt: '2025-09-02T17:45:18Z',
        },
      ],
    },
    {
      commentId: 'c017',
      authorId: 'user_789',
      title: 'Alternative approach',
      content:
        "There's another method using recursion that might be more elegant for certain use cases.",
      createdAt: '2025-09-02T13:19:44Z',
      updatedAt: '2025-09-02T13:19:44Z',
      subComments: [
        {
          commentId: 'c017-s1',
          authorId: 'user_056',
          title: 'Stack overflow risk',
          content:
            'Be careful with recursion depth though. Can hit stack limits on large inputs.',
          createdAt: '2025-09-02T14:42:30Z',
          updatedAt: '2025-09-02T14:42:30Z',
        },
        {
          commentId: 'c017-s2',
          authorId: 'user_789',
          title: 'Tail recursion',
          content:
            'Good point. Tail recursion optimization helps, but not all languages support it.',
          createdAt: '2025-09-02T16:15:55Z',
          updatedAt: '2025-09-02T16:15:55Z',
        },
        {
          commentId: 'c017-s3',
          authorId: 'user_278',
          title: 'Iterative better',
          content:
            "For production code, I'd stick with the iterative approach to be safe.",
          createdAt: '2025-09-02T18:30:22Z',
          updatedAt: '2025-09-02T18:30:22Z',
        },
      ],
    },
    {
      commentId: 'c018',
      authorId: 'user_056',
      title: 'Documentation request',
      content:
        'Could you add more inline comments to the code examples? Would help with understanding.',
      createdAt: '2025-09-03T17:52:16Z',
      updatedAt: '2025-09-03T17:52:16Z',
      subComments: [
        {
          commentId: 'c018-s1',
          authorId: 'user_512',
          title: 'Agreed',
          content:
            'More comments would definitely help, especially for complex sections.',
          createdAt: '2025-09-03T19:18:42Z',
          updatedAt: '2025-09-03T19:18:42Z',
        },
      ],
    },
    {
      commentId: 'c019',
      authorId: 'user_621',
      title: 'Incredible depth',
      content:
        'The level of detail here is impressive. You clearly put a lot of effort into this.',
      createdAt: '2025-09-04T10:28:59Z',
      updatedAt: '2025-09-04T10:28:59Z',
      subComments: [
        {
          commentId: 'c019-s1',
          authorId: 'user_534',
          title: 'Quality content',
          content: 'This is the kind of content the internet needs more of.',
          createdAt: '2025-09-04T12:45:33Z',
          updatedAt: '2025-09-04T12:45:33Z',
        },
        {
          commentId: 'c019-s2',
          authorId: 'user_178',
          title: 'Appreciate the effort',
          content:
            'The time spent on this really shows. Thank you for sharing freely.',
          createdAt: '2025-09-04T15:22:18Z',
          updatedAt: '2025-09-04T15:22:18Z',
        },
      ],
    },
    {
      commentId: 'c020',
      authorId: 'user_178',
      title: 'Security consideration',
      content:
        "Don't forget to sanitize inputs when implementing this in production environments.",
      createdAt: '2025-09-05T20:11:33Z',
      updatedAt: '2025-09-06T08:45:12Z',
      subComments: [
        {
          commentId: 'c020-s1',
          authorId: 'user_623',
          title: 'Critical point',
          content:
            'This cannot be stressed enough. SQL injection is still a major threat.',
          createdAt: '2025-09-05T21:33:45Z',
          updatedAt: '2025-09-05T21:33:45Z',
        },
        {
          commentId: 'c020-s2',
          authorId: 'user_089',
          title: 'Use parameterized queries',
          content: 'Always use parameterized queries or prepared statements.',
          createdAt: '2025-09-06T09:18:22Z',
          updatedAt: '2025-09-06T09:18:22Z',
        },
      ],
    },
    {
      commentId: 'c021',
      authorId: 'user_445',
      title: 'Worked perfectly',
      content:
        'Followed the tutorial step by step and everything worked on the first try. Rare!',
      createdAt: '2025-09-06T12:37:28Z',
      updatedAt: '2025-09-06T12:37:28Z',
      subComments: [
        {
          commentId: 'c021-s1',
          authorId: 'user_756',
          title: 'Lucky you!',
          content:
            'I had to debug a few things, but got it working eventually.',
          createdAt: '2025-09-06T14:15:42Z',
          updatedAt: '2025-09-06T14:15:42Z',
        },
      ],
    },
    {
      commentId: 'c022',
      authorId: 'user_302',
      title: 'Memory usage question',
      content:
        "What's the memory footprint like when processing millions of records?",
      createdAt: '2025-09-07T15:49:41Z',
      updatedAt: '2025-09-07T15:49:41Z',
      subComments: [
        {
          commentId: 'c022-s1',
          authorId: 'user_390',
          title: 'Use streaming',
          content:
            "For millions of records, you'll want to use streaming to keep memory low.",
          createdAt: '2025-09-07T17:22:30Z',
          updatedAt: '2025-09-07T17:22:30Z',
        },
        {
          commentId: 'c022-s2',
          authorId: 'user_712',
          title: 'Batch processing',
          content:
            'Alternatively, process in batches of 10k-50k records at a time.',
          createdAt: '2025-09-07T19:45:18Z',
          updatedAt: '2025-09-07T19:45:18Z',
        },
        {
          commentId: 'c022-s3',
          authorId: 'user_302',
          title: 'Thanks both',
          content: 'Great suggestions! Will try the batching approach first.',
          createdAt: '2025-09-08T08:30:55Z',
          updatedAt: '2025-09-08T08:30:55Z',
        },
      ],
    },
    {
      commentId: 'c023',
      authorId: 'user_589',
      title: 'Comparison needed',
      content:
        "How does this compare to the approach mentioned in last week's post?",
      createdAt: '2025-09-08T09:06:55Z',
      updatedAt: '2025-09-08T09:06:55Z',
      subComments: [
        {
          commentId: 'c023-s1',
          authorId: 'user_267',
          title: 'Different use cases',
          content:
            "They solve different problems. Last week's was for real-time, this is for batch.",
          createdAt: '2025-09-08T11:18:42Z',
          updatedAt: '2025-09-08T11:18:42Z',
        },
      ],
    },
    {
      commentId: 'c024',
      authorId: 'user_134',
      title: 'Edge case found',
      content:
        "The algorithm doesn't handle null values correctly. Discovered this during testing.",
      createdAt: '2025-09-09T18:24:17Z',
      updatedAt: '2025-09-10T11:33:45Z',
      subComments: [
        {
          commentId: 'c024-s1',
          authorId: 'user_401',
          title: 'Null checks needed',
          content:
            'Good find! Adding explicit null checks at the start should fix this.',
          createdAt: '2025-09-09T20:15:30Z',
          updatedAt: '2025-09-09T20:15:30Z',
        },
        {
          commentId: 'c024-s2',
          authorId: 'user_134',
          title: 'PR submitted',
          content:
            'I submitted a PR with the fix. Hopefully it gets merged soon.',
          createdAt: '2025-09-10T12:42:18Z',
          updatedAt: '2025-09-10T12:42:18Z',
        },
      ],
    },
    {
      commentId: 'c025',
      authorId: 'user_756',
      title: 'Excellent breakdown',
      content:
        'Breaking down the complex concept into smaller chunks made it so much easier to digest.',
      createdAt: '2025-09-10T14:58:02Z',
      updatedAt: '2025-09-10T14:58:02Z',
      subComments: [
        {
          commentId: 'c025-s1',
          authorId: 'user_223',
          title: 'Agree completely',
          content: 'The step-by-step approach is perfect for learning.',
          createdAt: '2025-09-10T16:33:45Z',
          updatedAt: '2025-09-10T16:33:45Z',
        },
        {
          commentId: 'c025-s2',
          authorId: 'user_467',
          title: 'Teaching style',
          content:
            'This is how technical content should be written. Clear and accessible.',
          createdAt: '2025-09-10T18:45:22Z',
          updatedAt: '2025-09-10T18:45:22Z',
        },
      ],
    },
    {
      commentId: 'c026',
      authorId: 'user_223',
      title: 'Video request',
      content:
        'Any chance of getting a video walkthrough? Some of us learn better that way.',
      createdAt: '2025-09-11T11:42:36Z',
      updatedAt: '2025-09-11T11:42:36Z',
      subComments: [
        {
          commentId: 'c026-s1',
          authorId: 'user_345',
          title: 'Would love that',
          content: "A video would be amazing. I'm a visual learner too.",
          createdAt: '2025-09-11T13:18:55Z',
          updatedAt: '2025-09-11T13:18:55Z',
        },
        {
          commentId: 'c026-s2',
          authorId: 'user_891',
          title: 'YouTube series',
          content:
            'Even better if it becomes a YouTube series covering related topics.',
          createdAt: '2025-09-11T15:42:30Z',
          updatedAt: '2025-09-11T15:42:30Z',
        },
        {
          commentId: 'c026-s3',
          authorId: 'user_223',
          title: 'With live coding',
          content:
            'If you do make a video, please include live coding portions!',
          createdAt: '2025-09-11T17:30:18Z',
          updatedAt: '2025-09-11T17:30:18Z',
        },
      ],
    },
    {
      commentId: 'c027',
      authorId: 'user_467',
      title: 'Production ready?',
      content:
        'Is this approach battle-tested enough for production use, or still experimental?',
      createdAt: '2025-09-12T16:15:48Z',
      updatedAt: '2025-09-12T16:15:48Z',
      subComments: [
        {
          commentId: 'c027-s1',
          authorId: 'user_534',
          title: 'In production',
          content:
            "We've been running this in production for 6 months. Rock solid.",
          createdAt: '2025-09-12T18:22:42Z',
          updatedAt: '2025-09-12T18:22:42Z',
        },
      ],
    },
    {
      commentId: 'c028',
      authorId: 'user_891',
      title: 'Typo spotted',
      content:
        "There's a typo in the third paragraph - 'recieve' should be 'receive'.",
      createdAt: '2025-09-13T08:31:24Z',
      updatedAt: '2025-09-13T08:31:24Z',
      subComments: [
        {
          commentId: 'c028-s1',
          authorId: 'user_156',
          title: 'Common mistake',
          content:
            "That's one of the most commonly misspelled words in English!",
          createdAt: '2025-09-13T10:15:33Z',
          updatedAt: '2025-09-13T10:15:33Z',
        },
      ],
    },
    {
      commentId: 'c029',
      authorId: 'user_345',
      title: 'Cross-platform support',
      content: 'Does this work on Windows as well, or is it Linux/Mac only?',
      createdAt: '2025-09-14T13:57:09Z',
      updatedAt: '2025-09-14T13:57:09Z',
      subComments: [
        {
          commentId: 'c029-s1',
          authorId: 'user_678',
          title: 'Works everywhere',
          content: 'Tested on all three platforms. Works identically on each.',
          createdAt: '2025-09-14T15:33:45Z',
          updatedAt: '2025-09-14T15:33:45Z',
        },
        {
          commentId: 'c029-s2',
          authorId: 'user_345',
          title: 'Great news',
          content: "Perfect! That's exactly what I needed to hear.",
          createdAt: '2025-09-14T17:18:22Z',
          updatedAt: '2025-09-14T17:18:22Z',
        },
      ],
    },
    {
      commentId: 'c030',
      authorId: 'user_678',
      title: 'Benchmark results',
      content:
        'I ran some benchmarks and can confirm the performance claims are accurate.',
      createdAt: '2025-09-15T19:23:51Z',
      updatedAt: '2025-09-16T10:12:30Z',
      subComments: [
        {
          commentId: 'c030-s1',
          authorId: 'user_234',
          title: 'Share methodology?',
          content:
            'Could you share your benchmarking methodology? Would like to replicate.',
          createdAt: '2025-09-15T21:15:42Z',
          updatedAt: '2025-09-15T21:15:42Z',
        },
        {
          commentId: 'c030-s2',
          authorId: 'user_678',
          title: 'Happy to share',
          content:
            'Sure! I used JMH for the tests. Will post details on my GitHub.',
          createdAt: '2025-09-16T11:30:18Z',
          updatedAt: '2025-09-16T11:30:18Z',
        },
      ],
    },
    {
      commentId: 'c031',
      authorId: 'user_512',
      title: 'Dependency concerns',
      content:
        'The external library mentioned has some known vulnerabilities. Any alternatives?',
      createdAt: '2025-09-16T10:48:33Z',
      updatedAt: '2025-09-16T10:48:33Z',
      subComments: [
        {
          commentId: 'c031-s1',
          authorId: 'user_401',
          title: 'Check versions',
          content:
            'The vulnerabilities are in older versions. v2.0+ is patched.',
          createdAt: '2025-09-16T12:22:45Z',
          updatedAt: '2025-09-16T12:22:45Z',
        },
        {
          commentId: 'c031-s2',
          authorId: 'user_189',
          title: 'Alternative exists',
          content:
            "There's a fork with better security practices if you're concerned.",
          createdAt: '2025-09-16T14:45:30Z',
          updatedAt: '2025-09-16T14:45:30Z',
        },
      ],
    },
    {
      commentId: 'c032',
      authorId: 'user_189',
      title: 'Async implementation',
      content:
        'Would be great to see an async version of this for non-blocking operations.',
      createdAt: '2025-09-17T15:34:17Z',
      updatedAt: '2025-09-17T15:34:17Z',
      subComments: [
        {
          commentId: 'c032-s1',
          authorId: 'user_789',
          title: 'Working on it',
          content:
            "I'm actually working on an async wrapper. Should be done soon.",
          createdAt: '2025-09-17T17:18:42Z',
          updatedAt: '2025-09-17T17:18:42Z',
        },
        {
          commentId: 'c032-s2',
          authorId: 'user_189',
          title: 'Excited to see it',
          content: "Please share when it's ready. Many of us need this.",
          createdAt: '2025-09-17T19:33:55Z',
          updatedAt: '2025-09-17T19:33:55Z',
        },
        {
          commentId: 'c032-s3',
          authorId: 'user_623',
          title: 'Promise-based?',
          content: 'Will it be promise-based or use async/await syntax?',
          createdAt: '2025-09-18T08:15:22Z',
          updatedAt: '2025-09-18T08:15:22Z',
        },
      ],
    },
    {
      commentId: 'c033',
      authorId: 'user_634',
      title: 'License question',
      content:
        'What license is the code under? Can we use it in commercial projects?',
      createdAt: '2025-09-18T09:02:44Z',
      updatedAt: '2025-09-18T09:02:44Z',
      subComments: [
        {
          commentId: 'c033-s1',
          authorId: 'user_421',
          title: 'MIT license',
          content: "It's MIT licensed, so yes - commercial use is allowed.",
          createdAt: '2025-09-18T10:45:33Z',
          updatedAt: '2025-09-18T10:45:33Z',
        },
      ],
    },
    {
      commentId: 'c034',
      authorId: 'user_278',
      title: 'Elegant solution',
      content:
        "This is the most elegant solution I've seen to this problem. Well done!",
      createdAt: '2025-09-19T17:46:28Z',
      updatedAt: '2025-09-19T17:46:28Z',
      subComments: [
        {
          commentId: 'c034-s1',
          authorId: 'user_087',
          title: 'Agreed!',
          content: 'The simplicity is beautiful. Sometimes less is more.',
          createdAt: '2025-09-19T19:22:45Z',
          updatedAt: '2025-09-19T19:22:45Z',
        },
        {
          commentId: 'c034-s2',
          authorId: 'user_101',
          title: 'Clean code',
          content:
            'Readable and maintainable. Exactly what production code should look like.',
          createdAt: '2025-09-19T21:15:18Z',
          updatedAt: '2025-09-19T21:15:18Z',
        },
      ],
    },
    {
      commentId: 'c035',
      authorId: 'user_445',
      title: 'Integration help',
      content:
        'Having trouble integrating this with my existing codebase. Any tips?',
      createdAt: '2025-09-20T12:19:56Z',
      updatedAt: '2025-09-21T08:33:20Z',
      subComments: [
        {
          commentId: 'c035-s1',
          authorId: 'user_356',
          title: 'What framework?',
          content: 'What framework are you using? The integration varies.',
          createdAt: '2025-09-20T14:15:42Z',
          updatedAt: '2025-09-20T14:15:42Z',
        },
        {
          commentId: 'c035-s2',
          authorId: 'user_445',
          title: 'Using Express',
          content: "It's an Express.js backend with PostgreSQL.",
          createdAt: '2025-09-21T09:18:30Z',
          updatedAt: '2025-09-21T09:18:30Z',
        },
        {
          commentId: 'c035-s3',
          authorId: 'user_178',
          title: 'Middleware approach',
          content:
            'For Express, wrap it as middleware. I can share a gist if helpful.',
          createdAt: '2025-09-21T11:45:55Z',
          updatedAt: '2025-09-21T11:45:55Z',
        },
      ],
    },
    {
      commentId: 'c036',
      authorId: 'user_823',
      title: 'Mobile compatibility',
      content:
        'Tested this on mobile devices and performance is surprisingly good.',
      createdAt: '2025-09-21T14:55:31Z',
      updatedAt: '2025-09-21T14:55:31Z',
      subComments: [
        {
          commentId: 'c036-s1',
          authorId: 'user_567',
          title: 'Which devices?',
          content: 'Which devices did you test on? Curious about older phones.',
          createdAt: '2025-09-21T16:33:18Z',
          updatedAt: '2025-09-21T16:33:18Z',
        },
        {
          commentId: 'c036-s2',
          authorId: 'user_823',
          title: 'Various phones',
          content:
            'iPhone 12, Pixel 6, and a 3-year-old Samsung. All worked fine.',
          createdAt: '2025-09-21T18:18:42Z',
          updatedAt: '2025-09-21T18:18:42Z',
        },
      ],
    },
    {
      commentId: 'c037',
      authorId: 'user_156',
      title: 'Database considerations',
      content:
        'When using this with a database, make sure to add proper indexes for best performance.',
      createdAt: '2025-09-22T08:41:13Z',
      updatedAt: '2025-09-22T08:41:13Z',
      subComments: [
        {
          commentId: 'c037-s1',
          authorId: 'user_302',
          title: 'Which columns?',
          content: 'Which columns should be indexed specifically?',
          createdAt: '2025-09-22T10:22:45Z',
          updatedAt: '2025-09-22T10:22:45Z',
        },
        {
          commentId: 'c037-s2',
          authorId: 'user_156',
          title: 'Primary and foreign keys',
          content:
            'At minimum, index the primary key and any foreign key columns used in joins.',
          createdAt: '2025-09-22T12:45:30Z',
          updatedAt: '2025-09-22T12:45:30Z',
        },
      ],
    },
    {
      commentId: 'c038',
      authorId: 'user_567',
      title: 'Localization support',
      content:
        'Does this handle internationalization well? We need to support multiple languages.',
      createdAt: '2025-09-23T16:27:49Z',
      updatedAt: '2025-09-23T16:27:49Z',
      subComments: [
        {
          commentId: 'c038-s1',
          authorId: 'user_634',
          title: 'UTF-8 support',
          content:
            'It handles UTF-8 encoding properly, so most languages work out of the box.',
          createdAt: '2025-09-23T18:15:33Z',
          updatedAt: '2025-09-23T18:15:33Z',
        },
      ],
    },
    {
      commentId: 'c039',
      authorId: 'user_401',
      title: 'Error handling',
      content:
        'The error handling could be more robust. Consider adding try-catch blocks.',
      createdAt: '2025-09-24T11:13:25Z',
      updatedAt: '2025-09-25T09:45:00Z',
      subComments: [
        {
          commentId: 'c039-s1',
          authorId: 'user_234',
          title: 'Custom errors too',
          content:
            'Also consider creating custom error classes for better debugging.',
          createdAt: '2025-09-24T13:22:45Z',
          updatedAt: '2025-09-24T13:22:45Z',
        },
        {
          commentId: 'c039-s2',
          authorId: 'user_712',
          title: 'Error boundaries',
          content:
            'If using React, error boundaries are essential for graceful failure.',
          createdAt: '2025-09-24T15:45:18Z',
          updatedAt: '2025-09-24T15:45:18Z',
        },
        {
          commentId: 'c039-s3',
          authorId: 'user_401',
          title: 'Good additions',
          content:
            'Both excellent suggestions. Will incorporate in my implementation.',
          createdAt: '2025-09-25T10:30:42Z',
          updatedAt: '2025-09-25T10:30:42Z',
        },
      ],
    },
    {
      commentId: 'c040',
      authorId: 'user_234',
      title: 'Unit tests included?',
      content:
        'Are there any unit tests available for this code? Would help with validation.',
      createdAt: '2025-09-25T13:59:07Z',
      updatedAt: '2025-09-25T13:59:07Z',
    },
    {
      commentId: 'c041',
      authorId: 'user_712',
      title: 'Framework agnostic?',
      content:
        'Can this be used with any framework or is it tied to a specific one?',
      createdAt: '2025-09-26T18:35:42Z',
      updatedAt: '2025-09-26T18:35:42Z',
      subComments: [
        {
          commentId: 'c041-s1',
          authorId: 'user_089',
          title: 'Fully agnostic',
          content: "It's pure JavaScript/TypeScript. Works with any framework.",
          createdAt: '2025-09-26T20:18:33Z',
          updatedAt: '2025-09-26T20:18:33Z',
        },
        {
          commentId: 'c041-s2',
          authorId: 'user_712',
          title: 'Perfect',
          content: "That's exactly what I was hoping for. Thanks!",
          createdAt: '2025-09-27T08:45:22Z',
          updatedAt: '2025-09-27T08:45:22Z',
        },
      ],
    },
    {
      commentId: 'c042',
      authorId: 'user_089',
      title: 'Backwards compatibility',
      content:
        "Will this work with older versions of the runtime? We're stuck on v14.",
      createdAt: '2025-09-27T10:21:18Z',
      updatedAt: '2025-09-27T10:21:18Z',
      subComments: [
        {
          commentId: 'c042-s1',
          authorId: 'user_356',
          title: 'Minimum v16',
          content: 'Requires Node 16+ due to some ES2020 features used.',
          createdAt: '2025-09-27T12:15:42Z',
          updatedAt: '2025-09-27T12:15:42Z',
        },
      ],
    },
    {
      commentId: 'c043',
      authorId: 'user_356',
      title: 'Caching strategy',
      content:
        'What caching strategy would you recommend when using this in production?',
      createdAt: '2025-09-28T15:47:54Z',
      updatedAt: '2025-09-28T15:47:54Z',
      subComments: [
        {
          commentId: 'c043-s1',
          authorId: 'user_623',
          title: 'LRU cache',
          content:
            'LRU cache works great for this. We use node-cache with good results.',
          createdAt: '2025-09-28T17:33:18Z',
          updatedAt: '2025-09-28T17:33:18Z',
        },
        {
          commentId: 'c043-s2',
          authorId: 'user_087',
          title: 'Redis for distributed',
          content: 'For distributed systems, Redis is the way to go.',
          createdAt: '2025-09-28T19:45:42Z',
          updatedAt: '2025-09-28T19:45:42Z',
        },
      ],
    },
    {
      commentId: 'c044',
      authorId: 'user_623',
      title: 'Rate limiting',
      content:
        "Don't forget to implement rate limiting if exposing this as an API endpoint.",
      createdAt: '2025-09-29T09:33:30Z',
      updatedAt: '2025-09-29T09:33:30Z',
      subComments: [
        {
          commentId: 'c044-s1',
          authorId: 'user_178',
          title: 'Essential advice',
          content:
            'This is crucial. We learned the hard way during a traffic spike.',
          createdAt: '2025-09-29T11:18:45Z',
          updatedAt: '2025-09-29T11:18:45Z',
        },
        {
          commentId: 'c044-s2',
          authorId: 'user_534',
          title: 'Use express-rate-limit',
          content: 'express-rate-limit is a simple drop-in solution for this.',
          createdAt: '2025-09-29T13:42:30Z',
          updatedAt: '2025-09-29T13:42:30Z',
        },
        {
          commentId: 'c044-s3',
          authorId: 'user_267',
          title: 'Token bucket',
          content:
            'Token bucket algorithm gives you more control if you need it.',
          createdAt: '2025-09-29T15:55:18Z',
          updatedAt: '2025-09-29T15:55:18Z',
        },
      ],
    },
    {
      commentId: 'c045',
      authorId: 'user_178',
      title: 'Logging recommendations',
      content:
        'Adding structured logging helped us debug issues in production significantly.',
      createdAt: '2025-09-30T14:19:06Z',
      updatedAt: '2025-10-01T11:22:45Z',
      subComments: [
        {
          commentId: 'c045-s1',
          authorId: 'user_445',
          title: 'Which library?',
          content: 'What logging library do you recommend? Winston or Pino?',
          createdAt: '2025-09-30T16:33:42Z',
          updatedAt: '2025-09-30T16:33:42Z',
        },
        {
          commentId: 'c045-s2',
          authorId: 'user_178',
          title: 'Pino for performance',
          content:
            'Pino is faster, but Winston has more features. Depends on your needs.',
          createdAt: '2025-10-01T12:15:18Z',
          updatedAt: '2025-10-01T12:15:18Z',
        },
      ],
    },
    {
      commentId: 'c046',
      authorId: 'user_534',
      title: 'Container deployment',
      content:
        "Here's a Dockerfile that works well for deploying this in containers.",
      createdAt: '2025-10-01T17:05:41Z',
      updatedAt: '2025-10-01T17:05:41Z',
      subComments: [
        {
          commentId: 'c046-s1',
          authorId: 'user_467',
          title: 'Multi-stage build?',
          content: 'Is it a multi-stage build for smaller image size?',
          createdAt: '2025-10-01T19:22:33Z',
          updatedAt: '2025-10-01T19:22:33Z',
        },
        {
          commentId: 'c046-s2',
          authorId: 'user_534',
          title: 'Yes indeed',
          content: 'Yes! Final image is under 100MB using Alpine base.',
          createdAt: '2025-10-01T21:45:18Z',
          updatedAt: '2025-10-01T21:45:18Z',
        },
      ],
    },
    {
      commentId: 'c047',
      authorId: 'user_267',
      title: 'Load testing results',
      content:
        'We load tested this with 10k concurrent users and it held up beautifully.',
      createdAt: '2025-10-02T11:51:23Z',
      updatedAt: '2025-10-02T11:51:23Z',
      subComments: [
        {
          commentId: 'c047-s1',
          authorId: 'user_823',
          title: 'What tool?',
          content: 'Which load testing tool did you use? K6 or Artillery?',
          createdAt: '2025-10-02T13:33:45Z',
          updatedAt: '2025-10-02T13:33:45Z',
        },
        {
          commentId: 'c047-s2',
          authorId: 'user_267',
          title: 'K6 for this',
          content: 'K6 for this test. It has great scripting capabilities.',
          createdAt: '2025-10-02T15:18:30Z',
          updatedAt: '2025-10-02T15:18:30Z',
        },
        {
          commentId: 'c047-s3',
          authorId: 'user_390',
          title: 'Share the script?',
          content: 'Would you mind sharing your K6 test script?',
          createdAt: '2025-10-02T17:42:55Z',
          updatedAt: '2025-10-02T17:42:55Z',
        },
      ],
    },
    {
      commentId: 'c048',
      authorId: 'user_789',
      title: 'Code review feedback',
      content:
        'After a thorough code review, I have a few suggestions for improvement.',
      createdAt: '2025-10-03T16:37:59Z',
      updatedAt: '2025-10-04T08:15:30Z',
    },
    {
      commentId: 'c049',
      authorId: 'user_421',
      title: 'Monitoring setup',
      content:
        "Here's how we set up monitoring and alerting for this in our infrastructure.",
      createdAt: '2025-10-04T13:23:35Z',
      updatedAt: '2025-10-04T13:23:35Z',
      subComments: [
        {
          commentId: 'c049-s1',
          authorId: 'user_712',
          title: 'Prometheus?',
          content: 'Are you using Prometheus for metrics collection?',
          createdAt: '2025-10-04T15:18:42Z',
          updatedAt: '2025-10-04T15:18:42Z',
        },
        {
          commentId: 'c049-s2',
          authorId: 'user_421',
          title: 'Prometheus + Grafana',
          content: 'Yes, Prometheus for metrics and Grafana for dashboards.',
          createdAt: '2025-10-04T17:33:55Z',
          updatedAt: '2025-10-04T17:33:55Z',
        },
        {
          commentId: 'c049-s3',
          authorId: 'user_134',
          title: 'Share dashboards?',
          content:
            'Could you share your Grafana dashboard JSON? Would save us setup time.',
          createdAt: '2025-10-04T19:45:22Z',
          updatedAt: '2025-10-04T19:45:22Z',
        },
      ],
    },
    {
      commentId: 'c050',
      authorId: 'user_145',
      title: 'Final thoughts',
      content:
        "After using this for a month in production, I can confidently say it's rock solid. Highly recommend!",
      createdAt: '2025-10-05T10:09:11Z',
      updatedAt: '2025-10-05T10:09:11Z',
      subComments: [
        {
          commentId: 'c050-s1',
          authorId: 'user_567',
          title: 'Great endorsement',
          content:
            'Production experience is the best validation. Thanks for sharing!',
          createdAt: '2025-10-05T12:22:45Z',
          updatedAt: '2025-10-05T12:22:45Z',
        },
        {
          commentId: 'c050-s2',
          authorId: 'user_302',
          title: 'Convinced',
          content:
            'This comment convinced me to give it a try. Starting implementation today!',
          createdAt: '2025-10-05T14:45:33Z',
          updatedAt: '2025-10-05T14:45:33Z',
        },
      ],
    },
  ];

  data.forEach((c) => {
    c.commentId = randomUUID();
    if (c.subComments && Array.isArray(c.subComments)) {
      c.subComments.forEach((sc) => (sc.commentId = randomUUID()));
    }
  });

  return data;
};

export default getMockData;
