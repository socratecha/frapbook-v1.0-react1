.. React Examples documentation master file, created by
   sphinx-quickstart on Sat Jan 25 21:34:59 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to React Examples's documentation!
==========================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

.. js:module:: App


.. js:function::getCollatzSequence(firstNumber)

   Computes a Collatz Sequence.

   :param firstNumber number: Number with which to lead off the sequence.

   :return: The sequence as an Array of numbers.


.. js:class:: Collatz

   .. js:method:: constructor(props)

      Create the Collatz component and pre-compute the Collatz
      sequence, which is stored as ``this.outputArr``.

      :param object props: Object with ``number`` field used to begin
                           the Collatz sequence.

   .. js:method:: render()

      Produce the ``div`` element with CSS class name ``Collatz``.  It
      includes a header and the Collatz sequence as an unordered list.


.. js:class:: App

   .. js:method:: render()

      Produce a ``div`` that contains within it some text on the left
      and the ``Collatz`` component on the right.

      The number 17 as the start of the sequence is hard-coded in.


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
