/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head
    let current
    let listOnePointer=list1
    let listTwoPointer=list2
    if (list1===null && list2===null){
        return null;
    }
    else if (list1===null && list2!==null){
        return list2;
    }
    else if (list1!==null && list2===null){
        return list1;
    }
    if (list1.val<list2.val){
        head=new ListNode(list1.val)
        current=head
        if (list1.next!==null){
            listOnePointer=list1.next;
        }
        else{
            head.next=list2;
            return head;
        }
        
    }
    if (list1.val===list2.val){
        head=new ListNode(list1.val)
        head.next=new ListNode(list2.val)
        current=head.next
        listOnePointer=listOnePointer.next;
        listTwoPointer=listTwoPointer.next;
    }
    if (list1.val>list2.val) {
        head=new ListNode(list2.val)
        current=head;
        if (list2.next!==null){
            listTwoPointer=list2.next;
        }
        else{
            head.next=list1;
            return head;
        }
    }
    while(listOnePointer!==null || listTwoPointer!==null){
        if(listOnePointer===null){
            current.next=listTwoPointer
            break;
        }
        if (listTwoPointer===null){
            current.next=listOnePointer;
            break;
        }
        if (listOnePointer.val<listTwoPointer.val){
            current.next=new ListNode(listOnePointer.val);
            current=current.next
            console.log(listOnePointer.val);
            if (listOnePointer.next!==null){
                listOnePointer=listOnePointer.next
            }
            else {
                current.next=listTwoPointer
                break;
            }
        }
        if (listOnePointer.val>listTwoPointer.val){
            current.next=new ListNode(listTwoPointer.val);
            current=current.next;
            console.log(listTwoPointer.val)
            
            if (listTwoPointer.next!==null){
                listTwoPointer=listTwoPointer.next
            }
            else {
                current.next=listOnePointer
                break;
            }
        }
        if (listOnePointer.val===listTwoPointer.val){
            current.next=new ListNode(listOnePointer.val, new ListNode(listTwoPointer.val))
            current=current.next.next;
            listOnePointer=listOnePointer.next;
            listTwoPointer=listTwoPointer.next;
        }
        
    }
    return head;
    
};