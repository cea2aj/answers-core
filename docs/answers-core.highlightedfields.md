<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/answers-core](./answers-core.md) &gt; [HighlightedFields](./answers-core.highlightedfields.md)

## HighlightedFields type

A mapping of fields to the values emphasized by the Answers API

<b>Signature:</b>

```typescript
export declare type HighlightedFields = {
    [fieldId: string]: HighlightedValue | HighlightedValue[] | HighlightedFields | HighlightedFields[];
};
```
<b>References:</b> [HighlightedValue](./answers-core.highlightedvalue.md)<!-- -->, [HighlightedFields](./answers-core.highlightedfields.md)

## Remarks

Only fields that have been marked as highlighted will be present - which may not be all fields of the corresponding [Result](./answers-core.result.md)<!-- -->'s rawData. Fields that are present will match the rawData's structure and order.

## Example

If a user searches for 'apple', the API will likely match fields that contain the word 'apple'.

```js
{
  description: {
    value: 'likes apple pie and green apples',
    matchedSubstrings: [
      { offset: 6, length: 5 },
      { offset: 26, length: 5 }
    ]
  },
  c_favoriteFruits: [
    {
      apples: [
        {
          value: 'Granny Smith',
          matchedSubstrings: []
        },
        {
          value: 'Upton Pyne Apple',
          matchedSubstrings: [{ offset: 11, length: 5}]
        }
      ],
      pears: [
        {
          value: 'Callery Pear',
          matchedSubstrings: []
        }
      ]
    }
  ]
}

```

